import React, { forwardRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { jsPDF } from 'jspdf';
import { Document, Packer, Paragraph, TextRun, UnderlineType, BorderStyle } from 'docx';
import { saveAs } from 'file-saver';

const ResumeBuilder = forwardRef((props, ref) => {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: '',
    location: '',
    phoneNumber: '',
    email: '',
    presentDesignation: '',
  });

  const [summary, setSummary] = useState('');

  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);

  const [isSaved, setIsSaved] = useState(false);
  const [errors, setErrors] = useState({});

  

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;
    setPersonalDetails(prev => ({ ...prev, [name]: value }));
    setIsSaved(false);
  };

  const handleChangeSummary = (e) => {
    setSummary(e.target.value);
    setIsSaved(false);
  };

  const validate = () => {
    const newErrors = {};

    // Personal Details Validation
    if (!personalDetails.fullName) {
      newErrors.fullName = 'Full name is required.';
    } else if (!/^[a-zA-Z\s]+$/.test(personalDetails.fullName)) {
      newErrors.fullName = 'Full name should only contain letters.';
    }

    if (!personalDetails.email) {
      newErrors.email = 'Email is required.';
    } else if (!/^[\S@]+@[\S@]+\.[\S@]+$/.test(personalDetails.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!personalDetails.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required.';
    } else if (!/^[0-9+\-() ]+$/.test(personalDetails.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number.';
    }
    
    if (!personalDetails.location) {
      newErrors.location = 'Location is required.';
    }

    if (!personalDetails.presentDesignation) {
      newErrors.presentDesignation = 'Present Designation is required.';
    }

    if (!summary) {
      newErrors.summary = 'Summary is required.';
    }

    // Experience Validation
    experiences.forEach((exp, index) => {
      if (!exp.jobTitle) newErrors[`experience-${index}-jobTitle`] = 'Job title is required.';
      if (!exp.companyName) newErrors[`experience-${index}-companyName`] = 'Company name is required.';
      if (!exp.startDate) newErrors[`experience-${index}-startDate`] = 'Start date is required.';
      if (!exp.endDate) newErrors[`experience-${index}-endDate`] = 'End date is required.';
      if (!exp.responsibilities) newErrors[`experience-${index}-responsibilities`] = 'Responsibilities are required.';
    });

    // Skills Validation
    skills.forEach((skill, index) => {
      if (!skill.category) newErrors[`skill-${index}-category`] = 'Skill category is required.';
      if (!skill.value) newErrors[`skill-${index}-value`] = 'Skill value is required.';
    });

    // Education Validation
    education.forEach((edu, index) => {
      if (!edu.degree) newErrors[`education-${index}-degree`] = 'Degree is required.';
      if (!edu.university) newErrors[`education-${index}-university`] = 'University is required.';
      if (!edu.period) newErrors[`education-${index}-period`] = 'Period is required.';
    });

    return newErrors;
  };

  const handleSave = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert('Please fill in all required fields correctly.');
      return;
    }
    setErrors({});
    setIsSaved(true);
    alert('Resume data saved successfully!');
  };

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
    doc.text(personalDetails.fullName || '[Your Full Name]', pageWidth / 2, yPos, { align: 'center' });
    yPos += 20;

    doc.setFont('Arial', 'bold');
    doc.setFontSize(16);
    doc.text(personalDetails.presentDesignation || '[Your Job Title]', pageWidth / 2, yPos, { align: 'center' });
    yPos += 30;

    // --- Contact Info ---
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 15;
    doc.setFontSize(10);
    doc.setFont('Arial', 'normal');
    const contactInfo = `${personalDetails.location || '[Location]'}   |   ${personalDetails.phoneNumber || '[Phone Number]'}   |   ${personalDetails.email || '[Email]'}`;
    doc.text(contactInfo, pageWidth / 2, yPos, { align: 'center' });
    yPos += 15;
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 20;

    // --- Summary ---
    addSectionTitle('Summary');
    doc.setFont('Arial', 'normal');
    doc.setFontSize(10);
    const summaryLines = doc.splitTextToSize(summary || '', pageWidth - margin * 2);
    summaryLines.forEach(line => {
      yPos = addText(line, margin, yPos, { fontSize: 10 });
    });
    yPos += 10;

    // --- Work Experience ---
    addSectionTitle('Work Experience');
    (experiences || []).forEach((job, index) => {
      doc.setFont('Arial', 'bold');
      doc.setFontSize(12);
      yPos = addText(job.jobTitle || '', margin, yPos); // Role Title
      doc.setFont('Arial', 'normal');
      doc.text(`${job.startDate || ''} - ${job.endDate || ''}`, pageWidth - margin, yPos - 12, { align: 'right' }); // Dates worked

      doc.setFont('Arial', 'bold');
      doc.setFontSize(10);
      yPos = addText(`${job.companyName || ''}, ${personalDetails.location || ''}`, margin, yPos); // Company and Location

      doc.setFont('Arial', 'normal');
      doc.setFontSize(10);
      const responsibilitiesLines = doc.splitTextToSize(job.responsibilities || '', pageWidth - margin * 2 - 10);
      responsibilitiesLines.forEach((line, lineIndex) => {
        if (lineIndex === 0) {
          yPos = addText(line, margin + 10, yPos, { fontSize: 10 });
        } else {
          yPos = addText(line, margin + 10, yPos, { fontSize: 10 }); // Align subsequent lines with the start of the first line
        }
      });
      yPos += 10;
      if (index < (experiences || []).length - 1) {
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, yPos, pageWidth - margin, yPos);
        yPos += 15;
      }
    });

    

    
    // --- Technical Skills ---
    addSectionTitle('Technical Skills');
    doc.setFont('Arial', 'normal');
    doc.setFontSize(10);
    console.log('Skills data for PDF:', skills);
    const skillsByCategory = (skills || []).reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill.value);
      return acc;
    }, {});

    Object.keys(skillsByCategory).forEach(category => {
      doc.setFont('Arial', 'bold');
      doc.text(`${category}:`, margin, yPos);

      const startXForSkills = margin + doc.getTextWidth(`${category}: `);

      doc.setFont('Arial', 'normal');
      const skillValues = skillsByCategory[category].join(', ');
      const availableWidthForSkills = pageWidth - startXForSkills - margin;

      const skillLines = doc.splitTextToSize(skillValues, availableWidthForSkills);

      let currentLineY = yPos;

      skillLines.forEach(line => {
        doc.text(line, startXForSkills, currentLineY);
        currentLineY += 12;
      });

      yPos = currentLineY;
      yPos += 5;
    });
    

    // --- Education ---
    addSectionTitle('Education');
    (education || []).forEach(edu => {
      doc.setFont('Arial', 'bold');
      doc.setFontSize(12);
      yPos = addText(edu.degree || '', margin, yPos);
      doc.setFont('Arial', 'normal');
      doc.text(edu.period || '', pageWidth - margin, yPos - 12, { align: 'right' });

      doc.setFont('Arial', 'italic');
      doc.setFontSize(10);
      yPos = addText(edu.university || '', margin, yPos);
      yPos += 10;
    });

    doc.save('Resume.pdf');
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
              text: personalDetails.fullName || '[Your Full Name]',
              heading: 'Title',
              alignment: 'center',
            }),
            new Paragraph({
              text: personalDetails.presentDesignation || '[Your Job Title]',
              heading: 'Subtitle',
              alignment: 'center',
            }),
            new Paragraph({
              text: `${personalDetails.location || '[Location]'}   |   ${personalDetails.phoneNumber || '[Phone Number]'}   |   ${personalDetails.email || '[Email]'}`,
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
            new Paragraph({
              text: summary || '',
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
              text: 'Work Experience',
              heading: 'Heading1',
              style: 'Cambria',
            }),
            ...(experiences || []).flatMap(job => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: job.jobTitle || '',
                    bold: true,
                  }),
                  new TextRun({
                    text: `	${job.startDate || ''} - ${job.endDate || ''}`,
                    bold: true,
                    style: 'Cambria',
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${job.companyName || ''}, ${personalDetails.location || ''}`,
                    bold: true,
                    style: 'Cambria',
                  }),
                ],
              }),
              new Paragraph({
                text: job.responsibilities || '',
                bullet: {
                  level: 0,
                },
                run: {
                  size: 20, // Adjust as needed, 20 is roughly 10pt
                },
              }),
            ]),
            new Paragraph({}), // Add space after each job
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
              text: 'Technical Skills',
              heading: 'Heading1',
              style: 'Cambria',
            }),
            ...Object.entries(
              (skills || []).reduce((acc, skill) => {
                if (!acc[skill.category]) {
                  acc[skill.category] = [];
                }
                acc[skill.category].push(skill.value);
                return acc;
              }, {})
            ).flatMap(([category, skills]) => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${category}: `,
                    bold: true,
                    style: 'Cambria',
                  }),
                  new TextRun({
                    text: skills.join(', '),
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
            ...(education || []).flatMap(edu => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: edu.degree || '',
                    bold: true,
                    style: 'Cambria',
                  }),
                  new TextRun({
                    text: `\t${edu.period || ''}`,
                    bold: true,
                    style: 'Cambria',
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: edu.university || '',
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
      saveAs(blob, 'Resume.docx');
    });
  };

  // Handlers for Work Experience
  const handleAddExperience = () => {
    setExperiences([...experiences, { jobTitle: '', companyName: '', startDate: '', endDate: '', responsibilities: '' }]);
    setIsSaved(false);
  };

  const handleRemoveExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
    setIsSaved(false);
  };

  const handleChangeExperience = (index, e) => {
    const { name, value } = e.target;
    const newExperiences = experiences.map((exp, i) => {
      if (i === index) {
        return { ...exp, [name]: value };
      }
      return exp;
    });
    setExperiences(newExperiences);
    setIsSaved(false);
  };

  // Handlers for Technical Skills
  const handleAddSkill = () => {
    setSkills([...skills, { category: '', value: '' }]);
    setIsSaved(false);
  };

  const handleRemoveSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
    setIsSaved(false);
  };

  const handleChangeSkill = (index, e) => {
    const { name, value } = e.target;
    const newSkills = skills.map((skill, i) => {
      if (i === index) {
        return { ...skill, [name]: value };
      }
      return skill;
    });
    setSkills(newSkills);
    setIsSaved(false);
  };

  // Handlers for Education
  const handleAddEducation = () => {
    setEducation([...education, { degree: '', university: '', period: '' }]);
    setIsSaved(false);
  };

  const handleRemoveEducation = (index) => {
    const newEducation = education.filter((_, i) => i !== index);
    setEducation(newEducation);
    setIsSaved(false);
  };

  const handleChangeEducation = (index, e) => {
    const { name, value } = e.target;
    const newEducation = education.map((edu, i) => {
      if (i === index) {
        return { ...edu, [name]: value };
      }
      return edu;
    });
    setEducation(newEducation);
    setIsSaved(false);
  };

  return (
    <motion.div
      className="relative min-h-screen w-screen bg-cover bg-center bg-no-repeat flex flex-col items-center pt-16 pb-16 md:pt-24"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/resume-builder-background.jpg)` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 opacity-70 animate-gradient-xy z-10"></div>
      <motion.div
        className="relative z-20 bg-black bg-opacity-70 p-10 rounded-lg max-w-4xl w-11/12 mt-10 mb-10 text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">Build Your Resume</h2>

        {/* Personal Details */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Personal Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={personalDetails.fullName}
                onChange={handleChangePersonal}
                className="p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 w-full"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={personalDetails.location}
                onChange={handleChangePersonal}
                className="p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 w-full"
              />
              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
            </div>
            <div>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={personalDetails.phoneNumber}
                onChange={handleChangePersonal}
                className="p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 w-full"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={personalDetails.email}
                onChange={handleChangePersonal}
                className="p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 w-full"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                type="text"
                name="presentDesignation"
                placeholder="Present Designation"
                value={personalDetails.presentDesignation}
                onChange={handleChangePersonal}
                className="p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 w-full"
              />
              {errors.presentDesignation && <p className="text-red-500 text-sm mt-1">{errors.presentDesignation}</p>}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Summary</h3>
          <textarea
            placeholder="A concise 2-3 line summary about your professional profile..."
            value={summary}
            onChange={handleChangeSummary}
            rows="5"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
          ></textarea>
          {errors.summary && <p className="text-red-500 text-sm mt-1">{errors.summary}</p>}
        </div>

        {/* Work Experience */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 p-6 rounded-lg mb-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    value={exp.jobTitle}
                    onChange={(e) => handleChangeExperience(index, e)}
                    className="p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 w-full"
                  />
                  {errors[`experience-${index}-jobTitle`] && <p className="text-red-500 text-sm mt-1">{errors[`experience-${index}-jobTitle`]}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={exp.companyName}
                    onChange={(e) => handleChangeExperience(index, e)}
                    className="p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 w-full"
                  />
                  {errors[`experience-${index}-companyName`] && <p className="text-red-500 text-sm mt-1">{errors[`experience-${index}-companyName`]}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="startDate"
                    placeholder="Start Date (e.g., Jan 2020)"
                    value={exp.startDate}
                    onChange={(e) => handleChangeExperience(index, e)}
                    className="p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 w-full"
                  />
                  {errors[`experience-${index}-startDate`] && <p className="text-red-500 text-sm mt-1">{errors[`experience-${index}-startDate`]}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="endDate"
                    placeholder="End Date (e.g., Dec 2023 or Present)"
                    value={exp.endDate}
                    onChange={(e) => handleChangeExperience(index, e)}
                    className="p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 w-full"
                  />
                  {errors[`experience-${index}-endDate`] && <p className="text-red-500 text-sm mt-1">{errors[`experience-${index}-endDate`]}</p>}
                </div>
              </div>
              <textarea
                name="responsibilities"
                placeholder="Responsibilities/Achievements (one per line)"
                value={exp.responsibilities}
                onChange={(e) => handleChangeExperience(index, e)}
                rows="5"
                className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
              ></textarea>
              {errors[`experience-${index}-responsibilities`] && <p className="text-red-500 text-sm mt-1">{errors[`experience-${index}-responsibilities`]}</p>}
              <button
                onClick={() => handleRemoveExperience(index)}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Remove Experience
              </button>
            </motion.div>
          ))},
          <button
            onClick={handleAddExperience}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Add Experience
          </button>
        </div>

        {/* Technical Skills */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 p-6 rounded-lg mb-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    name="category"
                    placeholder="Skill Category (e.g., CI/CD)"
                    value={skill.category}
                    onChange={(e) => handleChangeSkill(index, e)}
                    className="p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 w-full"
                  />
                  {errors[`skill-${index}-category`] && <p className="text-red-500 text-sm mt-1">{errors[`skill-${index}-category`]}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="value"
                    placeholder="Skill Value (e.g., Jenkins, GitLab)"
                    value={skill.value}
                    onChange={(e) => handleChangeSkill(index, e)}
                    className="p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 w-full"
                  />
                  {errors[`skill-${index}-value`] && <p className="text-red-500 text-sm mt-1">{errors[`skill-${index}-value`]}</p>}
                </div>
              </div>
              <button
                onClick={() => handleRemoveSkill(index)}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Remove Skill
              </button>
            </motion.div>
          ))}
          <button
            onClick={handleAddSkill}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Add Skill
          </button>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 p-6 rounded-lg mb-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    name="degree"
                    placeholder="Degree (e.g., Master of Science)"
                    value={edu.degree}
                    onChange={(e) => handleChangeEducation(index, e)}
                    className="p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 w-full"
                  />
                  {errors[`education-${index}-degree`] && <p className="text-red-500 text-sm mt-1">{errors[`education-${index}-degree`]}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="university"
                    placeholder="University Name"
                    value={edu.university}
                    onChange={(e) => handleChangeEducation(index, e)}
                    className="p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 w-full"
                  />
                  {errors[`education-${index}-university`] && <p className="text-red-500 text-sm mt-1">{errors[`education-${index}-university`]}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="period"
                    placeholder="Period (e.g., Jan 2021 - Jan 2023)"
                    value={edu.period}
                    onChange={(e) => handleChangeEducation(index, e)}
                    className="p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 w-full"
                  />
                  {errors[`education-${index}-period`] && <p className="text-red-500 text-sm mt-1">{errors[`education-${index}-period`]}</p>}
                </div>
              </div>
              <button
                onClick={() => handleRemoveEducation(index)}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Remove Education
              </button>
            </motion.div>
          ))}
          <button
            onClick={handleAddEducation}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Add Education
          </button>
        </div>

        {/* Save and Download Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300"
          >
            Save Resume Data
          </button>
          <button
            onClick={handleDownloadPdf}
            disabled={!isSaved}
            className={`font-bold py-3 px-6 rounded transition duration-300 ${isSaved ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}
          >
            Download Resume (PDF)
          </button>
          <button
            onClick={handleDownloadWord}
            disabled={!isSaved}
            className={`font-bold py-3 px-6 rounded transition duration-300 ${isSaved ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}
          >
            Download Resume (Word)
          </button>
        </div>

      </motion.div>
    </motion.div>
  );
});

export default ResumeBuilder;