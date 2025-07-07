import React, { useEffect, useState, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import CV from './CV';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import SiteBuild from './components/SiteBuild'; // Import SiteBuild
import ResumeBuilder from './components/ResumeBuilder'; // Import ResumeBuilder
import BottomNav from './components/BottomNav'; // Import BottomNav
import landingPageBackground from './assets/landingpage.jpg';
import logoT from './assets/logo1.png';
import { jsPDF } from 'jspdf';
import { Document, Packer, Paragraph, TextRun, UnderlineType, BorderStyle } from 'docx';
import { saveAs } from 'file-saver';
import { summary, experience, skills, education, hero } from './content';


function App() {
  
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDownloadMenuOpen, setIsDownloadMenuOpen] = useState(false);
  const downloadMenuRef = useRef(null);
  const downloadButtonRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDownloadMenu = () => {
    setIsDownloadMenuOpen(!isDownloadMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (downloadMenuRef.current && !downloadMenuRef.current.contains(event.target) &&
          downloadButtonRef.current && !downloadButtonRef.current.contains(event.target)) {
        setIsDownloadMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [downloadMenuRef, downloadButtonRef]);

  const handleDownloadPdf = () => {
    const doc = new jsPDF('p', 'pt', 'a4');
    const margin = 40;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPos = margin;

    // Helper function to add text and manage y position with page breaks
    const addText = (text, x, y, options = {}) => {
      const lineHeight = (options.fontSize || 10) * 1.2;
      if (y + lineHeight > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(text, x, y, options);
      return y + lineHeight;
    };

    // Helper for section titles
    const addSectionTitle = (title) => {
      yPos += 15;
      if (yPos + 20 > pageHeight - margin) { // Check if title fits on current page
        doc.addPage();
        yPos = margin;
      }
      doc.setFont('Arial', 'bold');
      doc.setFontSize(14);
      yPos = addText(title, margin, yPos);
      doc.setDrawColor(200, 200, 200);
      doc.line(margin, yPos - 5, pageWidth - margin, yPos - 5); // Thin line below title
      yPos += 10;
    };

    // --- Header ---
    doc.setFont('Arial', 'bold');
    doc.setFontSize(28);
    doc.text(hero.title, pageWidth / 2, yPos, { align: 'center' });
    yPos += 20;

    doc.setFont('Arial', 'bold');
    doc.setFontSize(16);
    doc.text(hero.subtitle, pageWidth / 2, yPos, { align: 'center' });
    yPos += 30;

    // --- Contact Info ---
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 15;
    doc.setFontSize(10);
    doc.setFont('Arial', 'normal');
    const contactInfo = `United Kingdom   |   +447469475250   |   ajithsuryathati@gmail.com`;
    doc.text(contactInfo, pageWidth / 2, yPos, { align: 'center' });
    yPos += 15;
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 20;

    // --- Summary ---
    addSectionTitle('Summary');
    doc.setFont('Arial', 'normal');
    doc.setFontSize(10);
    const summaryLines = doc.splitTextToSize(summary.paragraph, pageWidth - margin * 2);
    summaryLines.forEach(line => {
      if (line.includes('Key Highlights:')) {
        doc.setFont('Arial', 'bold');
        doc.setFontSize(10);
        yPos = addText(line, margin, yPos, { fontSize: 10 });
        doc.setFont('Arial', 'normal');
        doc.setFontSize(10);
      } else if (line.startsWith('●')) {
        yPos = addText(line, margin + 10, yPos, { fontSize: 10 });
      } else {
        yPos = addText(line, margin, yPos, { fontSize: 10 });
      }
    });
    yPos += 10;

    // --- Work Experience ---
    addSectionTitle('Work Experience');
    experience.jobs.forEach((job, index) => {
      doc.setFont('Arial', 'bold');
      doc.setFontSize(12);
      yPos = addText(job.title, margin, yPos); // Role Title
      doc.setFont('Arial', 'normal');
      doc.text(job.period, pageWidth - margin, yPos - 12, { align: 'right' }); // Dates worked

      doc.setFont('Arial', 'bold');
      doc.setFontSize(10);
      yPos = addText(`${job.company}, ${job.location || 'United Kingdom'}`, margin, yPos); // Company and Location

      doc.setFont('Arial', 'normal');
      doc.setFontSize(10);
      const responsibilitiesLines = doc.splitTextToSize(job.tasks.map(task => `• ${task}`).join('\n'), pageWidth - margin * 2 - 10);
      responsibilitiesLines.forEach((line, lineIndex) => {
        if (lineIndex === 0) {
          yPos = addText(line, margin + 10, yPos, { fontSize: 10 });
        } else {
          yPos = addText(line, margin + 10, yPos, { fontSize: 10 }); // Align subsequent lines with the start of the first line
        }
      });
      yPos += 10;
      if (index < experience.jobs.length - 1) {
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, yPos, pageWidth - margin, yPos);
        yPos += 15;
      }
    });

    // --- Technical Skills ---
    addSectionTitle('Technical Skills');
    doc.setFont('Arial', 'normal');
    doc.setFontSize(10);
    const skillsByCategory = skills.skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill.value);
      return acc;
    }, {});

    Object.keys(skillsByCategory).forEach(category => {
      doc.setFont('Arial', 'bold');
      doc.text(`${category}:`, margin, yPos); // Print bold category and colon

      const startXForSkills = margin + doc.getTextWidth(`${category}: `); // Calculate fixed start X for skills

      doc.setFont('Arial', 'normal');
      const skillValues = skillsByCategory[category].join(', ');
      const availableWidthForSkills = pageWidth - startXForSkills - margin; // Width for skill values

      const skillLines = doc.splitTextToSize(skillValues, availableWidthForSkills);

      let currentLineY = yPos; // Start at the same Y as the category

      skillLines.forEach(line => {
        doc.text(line, startXForSkills, currentLineY);
        currentLineY += 12; // Line height
      });

      yPos = currentLineY; // Update yPos to the end of the skill lines
      yPos += 5; // Add a small gap between skill categories
    });
    

    // --- Education ---
    addSectionTitle('Education');
    education.degrees.forEach(edu => {
      doc.setFont('Arial', 'bold');
      doc.setFontSize(12);
      yPos = addText(edu.degree, margin, yPos);
      doc.setFont('Arial', 'normal');
      doc.text(edu.period, pageWidth - margin, yPos - 12, { align: 'right' });

      doc.setFont('Arial', 'italic');
      doc.setFontSize(10);
      yPos = addText(edu.university, margin, yPos);
      yPos += 10;
    });

    doc.save('Ajith_Thati_Resume.pdf');
  };

  const handleDownloadWord = () => {
    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: 720, // 0.5 inch in twips (1/1440 of an inch)
                right: 720,
                bottom: 720,
                left: 720,
              },
            },
          },
          styles: {
            default: {
              document: {
                run: {
                  font: "Cambria",
                },
              },
            },
          },
          children: [
            new Paragraph({
              text: hero.title,
              heading: 'Title',
              alignment: 'center',
            }),
            new Paragraph({
              text: hero.subtitle,
              heading: 'Subtitle',
              alignment: 'center',
            }),
            new Paragraph({
              text: `United Kingdom   |   +447469475250   |   ajithsuryathati@gmail.com`,
              alignment: 'center',
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: '',
                  break: 1,
                }),
              ],
              border: {
                bottom: {
                  color: "auto",
                  space: 10,
                  value: "single",
                  size: 12,
                },
              },
            }),
            new Paragraph({
              text: 'Summary',
              heading: 'Heading1',
            }),
            ...summary.paragraph.split('\n').map(line => {
                if (line.includes('Key Highlights:')) {
                    return new Paragraph({
                        children: [new TextRun({ text: line, bold: true, size: 20 })]
                    });
                } else if (line.startsWith('●')) {
                    return new Paragraph({
                        text: line.substring(1).trim(),
                        bullet: {
                            level: 0
                        }
                    });
                } else {
                    return new Paragraph({ text: line });
                }
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: '',
                  break: 1,
                }),
              ],
              border: {
                bottom: {
                  color: "auto",
                  space: 1,
                  value: "single",
                  size: 6,
                },
              },
            }),
            new Paragraph({
              text: 'Work Experience',
              heading: 'Heading1',
              style: 'Cambria',
            }),
            ...experience.jobs.flatMap(job => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: job.title,
                    bold: true,
                    style: 'Cambria',
                  }),
                  new TextRun({
                    text: `	${job.period}`,
                    bold: true,
                    style: 'Cambria',
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${job.company}, ${job.location || 'United Kingdom'}`,
                    bold: true,
                    style: 'Cambria',
                  }),
                ],
              }),
              ...job.tasks.map(task => new Paragraph({
                text: task,
                bullet: {
                  level: 0,
                },
                run: {
                  size: 20, // Adjust as needed, 20 is roughly 10pt
                },
              })),
              new Paragraph({}), // Add space after each job
            ]),
            new Paragraph({
              children: [
                new TextRun({
                  text: '',
                  break: 1,
                }),
              ],
              border: {
                bottom: {
                  color: "auto",
                  space: 10, // Increased space
                  value: "single",
                  size: 12, // Increased size
                },
              },
            }),
            new Paragraph({
              text: 'Technical Skills',
              heading: 'Heading1',
              style: 'Cambria',
            }),
            ...skills.skills.flatMap(skill => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${skill.category}: `,
                    bold: true,
                    style: 'Cambria',
                  }),
                  new TextRun({
                    text: skill.value,
                    style: 'Cambria',
                  }),
                ],
              }),
            ]),
            new Paragraph({
              children: [
                new TextRun({
                  text: '',
                  break: 1,
                }),
              ],
              border: {
                bottom: {
                  color: "auto",
                  space: 10,
                  value: "single",
                  size: 12,
                },
              },
            }),
            new Paragraph({
              text: 'Education',
              heading: 'Heading1',
              style: 'Cambria',
            }),
            ...education.degrees.flatMap(edu => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: edu.degree,
                    bold: true,
                    style: 'Cambria',
                  }),
                  new TextRun({
                    text: `\t${edu.period}`,
                    bold: true,
                    style: 'Cambria',
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: edu.university,
                    italics: true,
                    style: 'Cambria',
                  }),
                ],
              }),
            ]),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, 'Ajith_Thati_Resume.docx');
    });
  };

  return (
    <div className="flex flex-col min-h-screen text-white text-center relative overflow-x-hidden bg-cover bg-center" style={{ backgroundImage: `url(${landingPageBackground})` }}>
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 py-4 z-50 shadow-lg flex justify-between items-center px-5">
        {/* Hamburger Menu (for mobile and tablet) */}
        <div className="lg:hidden flex items-center">
          <div className="flex flex-col cursor-pointer p-2 z-50" onClick={toggleNav}>
            <div className="w-6 h-0.5 bg-white my-1 transition-all duration-400"></div>
            <div className="w-6 h-0.5 bg-white my-1 transition-all duration-400"></div>
            <div className="w-6 h-0.5 bg-white my-1 transition-all duration-400"></div>
          </div>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:left-auto lg:translate-x-0">
          <Link to="/"><img src={logoT} alt="Logo" className="h-16 transition-all duration-300" /></Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={`fixed top-0 ${isNavOpen ? 'left-0' : '-left-full'} w-full h-full bg-black bg-opacity-95 flex justify-center items-center transition-all duration-300 z-40 lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:flex`}>
          <ul className="flex flex-col gap-5 lg:flex-row lg:gap-8 list-none p-0 m-0">
            <li><Link to="/" className="text-white no-underline text-2xl font-medium tracking-wider py-2 px-4 transition-all duration-300 hover:text-blue-500 hover:-translate-y-0.5 lg:text-lg" onClick={toggleNav}>HOME</Link></li>
            <li><Link to="/about" className="text-white no-underline text-2xl font-medium tracking-wider py-2 px-4 transition-all duration-300 hover:text-blue-500 hover:-translate-y-0.5 lg:text-lg" onClick={toggleNav}>ABOUT ME</Link></li>
            <li><Link to="/cv" className="text-white no-underline text-2xl font-medium tracking-wider py-2 px-4 transition-all duration-300 hover:text-blue-500 hover:-translate-y-0.5 lg:text-lg" onClick={toggleNav}>CV</Link></li>
            <li><Link to="/site-build" className="text-white no-underline text-2xl font-medium tracking-wider py-2 px-4 transition-all duration-300 hover:text-blue-500 hover:-translate-y-0.5 lg:text-lg" onClick={toggleNav}>SITE BUILD</Link></li>
            <li><Link to="/build-resume" className="text-white no-underline text-2xl font-medium tracking-wider py-2 px-4 transition-all duration-300 hover:text-blue-500 hover:-translate-y-0.5 lg:text-lg" onClick={toggleNav}>BUILD RESUME</Link></li>
          </ul>
        </nav>

        {/* Contact and Download Icons */}
        <div className="flex gap-4 items-center">
          <a href="tel:+447469475250" className="text-white text-2xl no-underline">📞</a>
          <a href="mailto:ajithsuryathati@gmail.com" className="text-white text-2xl no-underline">✉️</a>
          <div className="relative">
            <a href="#" onClick={toggleDownloadMenu} className="text-white text-2xl no-underline" ref={downloadButtonRef}>⬇️</a>
            {isDownloadMenuOpen && (
              <div ref={downloadMenuRef} className="absolute right-0 mt-2 w-48 bg-black bg-opacity-70 rounded-md shadow-lg z-50">
                <button onClick={() => { handleDownloadPdf(); setIsDownloadMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700">Download as PDF</button>
                <button onClick={() => { handleDownloadWord(); setIsDownloadMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700">Download as Word</button>
              </div>
            )}
          </div>
        </div>
      </header>

      <AnimatePresence mode='wait'>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex-grow select-none"
        >
          <Routes location={location}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/site-build" element={<SiteBuild />} />
            <Route path="/build-resume" element={<ResumeBuilder />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <footer className="fixed bottom-0 left-0 w-full bg-black bg-opacity-80 py-2 z-50 text-sm tracking-wider opacity-70 flex justify-center items-center lg:block hidden">
        <p>© AJITH SURYA THATI</p>
      </footer>
      <BottomNav />
    </div>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;