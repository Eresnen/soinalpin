import { FaUserCheck, FaClock, FaMedkit } from 'react-icons/fa';

export const competances = [
    {
        title: 'NOS ***AVANTAGES***',
        subTitle: 'PRISE EN CHARGE ***PERSONNALISÉE*** PAR VOS SOINS',
        description: `
      Vous cherchez des soins à ***domicile qui*** allient attention, respect et expertise ? 
      Chez SOINALPIN, nous comprenons les défis que peuvent représenter les soins à domicile. 
      Chaque situation est unique, et ***nous nous engageons à*** vous fournir un accompagnement humain et personnalisé.
      Nous croyons en la constance des soins et en la construction d’une relation de confiance durable. `,
        cards: [
            {
                id: 1,
                icon: FaUserCheck,
                title: 'Un seul ***soignant*** dédié',
                description:
                    'Nous croyons qu’un soignant ***stable*** et disponible est la clé pour créer un lien de confiance avec vous. Chaque patient est suivi par un professionnel dédié, vous offrant ainsi une continuité et une attention particulière à chaque visite.',
            },
            {
                id: 2,
                icon: FaClock,
                title: 'Ponctualité et ***fiabilité***',
                description:
                    'Nous savons à quel point votre ***temps**** est précieux. Nos soignants respectent vos horaires, offrant une ponctualité rigoureuse pour que vous n’ayez à vous soucier de rien. Un engagement envers la régularité et le respect de vos attentes.',
            },
            {
                id: 3,
                icon: FaMedkit,
                title: 'Une expertise de qualité',
                description:
                    'Nos infirmiers et ***infirmières*** sont des professionnels hautement ***qualifiés***, ayant une expérience approfondie dans les soins à domicile. Ils sont formés pour s’adapter à toutes les situations et vous offrir des soins de qualité, quelle que soit la complexité de vos besoins.',
            },
        ],
    }
];