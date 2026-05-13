import type { IconType } from 'react-icons';
import { BiLogoTypescript } from 'react-icons/bi';
import { DiMongodb, DiMsqlServer } from 'react-icons/di';
import {
	FaGithub,
	FaNodeJs,
	FaReact,
	FaLinux,
	FaShieldAlt,
	FaBug,
	FaNetworkWired,
	FaFileAlt,
} from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import {
	SiMysql,
	SiGit,
	SiDocker,
	SiPython,
	SiPostgresql,
} from 'react-icons/si';

export type SocialLink = {
	label: string;
	href: string;
	icon: IconType;
	iconColor: string;
	glowColor: string;
};

export type NavButton = {
	label: string;
	href: string;
	className: string;
};

export type TimelineItem = {
	role: string;
	org: string;
	period: string;
	bullets: string[];
};

export type TimelineSection = {
	heading: string;
	items: TimelineItem[];
};

export type TechItem = {
	label: string;
	icon: IconType;
	iconColor: string;
	glowColor: string;
};

export type TechGroup = {
	heading: string;
	items: TechItem[];
};

export type Project = {
	title: string;
	description: string;
	technologies: string[];
	link?: string;
	github?: string;
};

export const personal = {
	name: 'GOUDALO',
	fullName: 'Ozias Fulbert Goudalo',
	title: 'Développeur Full-stack & Systèmes de Sécurité Informatique',
	greeting: 'Bonjour, je suis',
	phone: '+229 01 52 997 997',
	phone2: '+229 01 92 22 46 57',
	email: 'oziasgoudalo@gmail.com',
	location: 'Porto-Novo / Dowa',
	repoUrl: 'https://github.com/',
	repoStarLabel: '⭐ Star ce repo',
	showRepoStar: false,
};

export const socialLinks: SocialLink[] = [
	{
		label: 'GitHub',
		href: 'https://github.com/FulbertG',
		icon: FaGithub,
		iconColor: 'rgba(255, 255, 255, 0.9)',
		glowColor: 'rgba(255, 255, 255, 0.4)',
	},
	{
		label: 'Email',
		href: 'mailto:oziasgoudalo@gmail.com',
		icon: IoMailOutline,
		iconColor: 'rgb(18, 122, 209)',
		glowColor: 'rgba(18, 122, 209, 0.7)',
	},
];

export const heroButtons: NavButton[] = [
	{ label: 'À propos', href: '/#about-me', className: 'first' },
	{ label: 'Contact', href: '/#contact', className: 'sec' },
];

export const about = {
	section: { title: 'À propos', subtitle: 'MOI' },
	intro: [
		"👋 Bonjour, je m'appelle Ozias Fulbert Goudalo, développeur full-stack et spécialiste en systèmes de sécurité informatique.",
		"Je suis un jeune passionné de la cybersécurité et du développement web/mobile, formé aux meilleures pratiques en sécurité des systèmes d'information.",
		"J'ai une expérience concrète en gestion de projet numérique, développement full-stack et protection des données.",
		"Actuellement en Licence en Systèmes de Sécurité Informatique, je cherche à approfondir mes connaissances pour devenir un expert en cybersécurité.",
	],
	timeline: [
		{
			heading: 'Expérience Professionnelle',
			items: [
				{
					role: 'Stagiaire – Direction des Systèmes d\'Informations',
					org: 'Mairie d\'Adjarra',
					period: 'Mai 2024 – Août 2024',
					bullets: [
						'Participation active aux réunions techniques et ateliers de coordination informatique.',
						'Contribution au déploiement de terminaux de paiement électronique (TPE) pour la collecte des taxes communales.',
						'Collaboration au développement et à la mise en ligne du site officiel de la mairie (frontend & backend).',
					],
				},
				{
					role: 'Co-développeur Full-stack',
					org: 'Projet – Clinique RAPHA',
					period: 'Juin 2025',
					bullets: [
						'Développement d\'une plateforme de prise de rendez-vous médicaux en ligne.',
						'Réalisation d\'une interface administrative complète.',
						'Gestion des créneaux, des spécialités médicales et des notifications par email.',
						'Sécurisation des données des patients conforme RGPD.',
					],
				},
				{
					role: 'Développeur Sécurité',
					org: 'Projet – Professionnel',
					period: 'Novembre 2025',
					bullets: [
						'Mise en place d\'un système anti-brute force.',
						'Blocage automatique des utilisateurs après tentatives échouées.',
						'Implémentation de logs de sécurité et alertes en temps réel.',
					],
				},
			],
		},
		{
			heading: 'Formation',
			items: [
				{
					role: 'Licence en Systèmes de Sécurité Informatique',
					org: 'Université / En cours...',
					period: '2024 - Présent',
					bullets: [
						'Spécialisation en cybersécurité: sécurité des réseaux, cryptographie, et défense des systèmes.',
						'Projets pratiques en pentesting et analyse de vulnérabilités.',
					],
				},
				{
					role: 'Baccalauréat Scientifique (Série D)',
					org: 'Lycée',
					period: 'Précédent',
					bullets: [],
				},
			],
		},
		{
			heading: 'Certifications',
			items: [
				{
					role: 'ICDL',
					org: 'Certification Internationale',
					period: '2023',
					bullets: [],
				},
			],
		},
	] satisfies TimelineSection[],
};

export const techStack = {
	section: { title: 'Compétences', subtitle: 'TECHNIQUES' },
	groups: [
		{
			heading: 'Sécurité Offensive',
			items: [
				{
					label: 'Kali Linux',
					icon: FaLinux,
					iconColor: 'rgb(60, 60, 60)',
					glowColor: 'rgba(60, 60, 60, 0.6)',
				},
				{
					label: 'Metasploit',
					icon: FaShieldAlt,
					iconColor: 'rgb(255, 100, 0)',
					glowColor: 'rgba(255, 100, 0, 0.6)',
				},
				{
					label: 'Burp Suite',
					icon: FaBug,
					iconColor: 'rgb(255, 138, 0)',
					glowColor: 'rgba(255, 138, 0, 0.6)',
				},
				{
					label: 'Nmap',
					icon: FaNetworkWired,
					iconColor: 'rgb(0, 200, 100)',
					glowColor: 'rgba(0, 200, 100, 0.6)',
				},
				{
					label: 'Wireshark',
					icon: FaFileAlt,
					iconColor: 'rgb(0, 122, 158)',
					glowColor: 'rgba(0, 122, 158, 0.6)',
				},
			],
		},
		{
			heading: 'Développement & Scripting',
			items: [
				{
					label: 'Python',
					icon: SiPython,
					iconColor: 'rgb(51, 122, 183)',
					glowColor: 'rgba(51, 122, 183, 0.6)',
				},
				{
					label: 'JavaScript',
					icon: FaReact,
					iconColor: 'rgb(255, 206, 84)',
					glowColor: 'rgba(255, 206, 84, 0.6)',
				},
				{
					label: 'TypeScript',
					icon: BiLogoTypescript,
					iconColor: 'rgb(0, 122, 204)',
					glowColor: 'rgba(0, 122, 204, 0.6)',
				},
				{
					label: 'Node.js',
					icon: FaNodeJs,
					iconColor: 'rgb(104, 160, 99)',
					glowColor: 'rgb(104, 160, 99)',
				},
			],
		},
		{
			heading: 'Infrastructure & Outils',
			items: [
				{
					label: 'Linux',
					icon: FaLinux,
					iconColor: 'rgb(255, 180, 0)',
					glowColor: 'rgba(255, 180, 0, 0.6)',
				},
				{
					label: 'Docker',
					icon: SiDocker,
					iconColor: 'rgb(30, 70, 150)',
					glowColor: 'rgba(30, 70, 150, 0.6)',
				},
				{
					label: 'Git',
					icon: SiGit,
					iconColor: 'rgb(255, 255, 255)',
					glowColor: 'rgba(255, 255, 255, 0.4)',
				},
			],
		},
		{
			heading: 'Bases de Données',
			items: [
				{
					label: 'PostgreSQL',
					icon: SiPostgresql,
					iconColor: 'rgb(20, 140, 200)',
					glowColor: 'rgba(20, 140, 200, 0.75)',
				},
				{
					label: 'MySQL',
					icon: SiMysql,
					iconColor: 'rgb(0, 122, 158)',
					glowColor: 'rgba(0, 122, 158, 0.75)',
				},
				{
					label: 'MongoDB',
					icon: DiMongodb,
					iconColor: 'rgb(0, 237, 100)',
					glowColor: 'rgba(0, 237, 100, 0.7)',
				},
				{
					label: 'SQL Server',
					icon: DiMsqlServer,
					iconColor: 'rgb(230, 50, 42)',
					glowColor: 'rgba(241, 83, 75, 0.5)',
				},
			],
		},
	] satisfies TechGroup[],
};

export const projects: Project[] = [
	{
		title: 'Analyse de malware - Lab pratique',
		description: 'Analyse statique et dynamique de fichiers exécutables suspects dans un environnement isolé. Identification des signatures malveillantes et documentation des indicateurs de compromission.',
		technologies: ['PEiD', 'Process Monitor', 'Wireshark', 'Strings'],
		github: 'https://github.com/',
	},
	{
		title: 'Script d\'automatisation de scan de vulnérabilités',
		description: 'Développement d\'un script Python utilisant Nmap et Nessus pour automatiser la découverte des vulnérabilités sur un réseau. Génération de rapports détaillés avec recommandations de correction.',
		technologies: ['Python', 'Nmap API', 'Nessus', 'ReportLab'],
		github: 'https://github.com/',
	},
	{
		title: 'CTF Writeup - Web Security',
		description: 'Résolution de plusieurs challenges de sécurité web incluant des vulnérabilités SQLi, XSS, et des attaques SSRF. Rédaction de writeups détaillés expliquant les methodologies d\'exploitation.',
		technologies: ['Burp Suite', 'SQLMap', 'FFUF', 'Hydra'],
		github: 'https://github.com/',
	},
	{
		title: 'Sécurisation d\'un serveur Linux',
		description: 'Projet de durcissement d\'un serveur Ubuntu: configuration firewall, mise en place de Fail2ban, audit des permissions, et implémentation de politiques de sécurité strictes.',
		technologies: ['UFW', 'Fail2ban', 'AuditD', 'Lynis'],
		github: 'https://github.com/',
	},
	{
		title: 'Forensic numérique - Investigation',
		description: 'Analyse d\'une image disque compromise pour identifier les activités malveillantes. Récupération de fichiers supprimés, analyse des logs, et reconstitution de la chaîne d\'attaque.',
		technologies: ['Autopsy', 'Volatility', 'FTK Imager', 'Sleuth Kit'],
		github: 'https://github.com/',
	},
	{
		title: 'Développement d\'un outil de phishing éducatif',
		description: 'Création d\'une plateforme de simulation de phishing pour former les employés. Personnalisation des templates, tracking des clics, et génération de rapports d\'awareness.',
		technologies: ['HTML/CSS', 'Node.js', 'Express', 'MongoDB'],
		github: 'https://github.com/',
	},
];