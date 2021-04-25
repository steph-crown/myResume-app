import * as Yup from 'yup';

const personalValidation = Yup.object().shape({
    personal: Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        address: Yup.string(),
        city: Yup.string(),
        country: Yup.string(),
        postcode: Yup.string(),
        phone: Yup.string(),
        email: Yup.string().email('Invalid Email Address').required('Email Address is required'),
        profession: Yup.string().required('Profession is required'),
        socialLinks: Yup.array().of(Yup.object().shape({
            media: Yup.string(),
            link: Yup.string().url('Invalid URL')
        }))
    })
});

const workValidation = Yup.object().shape({
    work: Yup.array().of(Yup.object({
        title: Yup.string().required('Job Title is required'),
        employer: Yup.string(),
        city: Yup.string(),
        country: Yup.string(),
        start: Yup.string(),
        end: Yup.string(),
        isCurrentlyWorking: Yup.boolean(),
        details: Yup.string()
    }))
});

const validationSchema = Yup.object().shape({
    personal: Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        address: Yup.string(),
        city: Yup.string(),
        country: Yup.string(),
        postcode: Yup.string(),
        phone: Yup.string(),
        email: Yup.string().email('Invalid Email Address').required('Email Address is required'),
        profession: Yup.string().required('Profession is required'),
        socialLinks: Yup.array().of(Yup.object().shape({
            media: Yup.string(),
            link: Yup.string().url('Invalid URL')
        }))
    }),
    work: Yup.array().of(Yup.object({
        title: Yup.string().required('Job Title is required'),
        employer: Yup.string(),
        city: Yup.string(),
        country: Yup.string(),
        start: Yup.date(),
        end: Yup.date(),
        isCurrentlyWorking: Yup.boolean(),
        details: Yup.string()
    })),
    volunteer: Yup.array().of(Yup.object({
        title: Yup.string().required('Job Title is required'),
        employer: Yup.string(),
        city: Yup.string(),
        country: Yup.string(),
        start: Yup.date(),
        end: Yup.date(),
        isCurrentlyWorking: Yup.boolean(),
        details: Yup.string()
    })),
    education: Yup.array().of(Yup.object({
        institutionName: Yup.string().required('Institution Name is required'),
        city: Yup.string(),
        degree: Yup.string(),
        fieldOfStudy: Yup.string(),
        startDate: Yup.date(),
        graduationDate: Yup.date(),
        description: Yup.string(),
        grade: Yup.string()
    })),
    skills: Yup.object({
        list: Yup.array().of(Yup.object().shape({
            name: Yup.string(),
            expertLevel: Yup.number()
        })),
        hideExpertLevel: Yup.boolean()
    }),
    siteLinks: Yup.array().of(Yup.object().shape({
        name: Yup.string(),
        link: Yup.string().url('Invalid URL')
    })),
    reference: Yup.array().of(Yup.object().shape({
        name: Yup.string(),
        jobTitle: Yup.string(),
        company: Yup.string(),
        email: Yup.string().email('Invalid Email Address'),
        phone: Yup.string()
    })),
    projects: Yup.array().of(Yup.object({
        title: Yup.string(),
        description: Yup.string(),
        projectLinks: Yup.array().of(Yup.object({
            name: Yup.string(),
            link: Yup.string()
        }))
    })),
    customSection: Yup.object({
        title: Yup.string(),
        list: Yup.array().of(Yup.object({
            title: Yup.string(),
            details: Yup.string()
        }))
    }),
    accomplishments: Yup.array().of(Yup.string()),
    languages: Yup.array().of(Yup.string()),
    affiliations: Yup.array().of(Yup.string()),
    activities: Yup.array().of(Yup.string()),
    publications: Yup.array().of(Yup.string()),
    interests: Yup.array().of(Yup.string()),
    certifications: Yup.array().of(Yup.string()),
    professionalSummary: Yup.string(),
    additionalInformation: Yup.string()
})

export {validationSchema, personalValidation, workValidation};