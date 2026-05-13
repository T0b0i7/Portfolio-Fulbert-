import { FloatingButton } from '../components/floating-button';
import { GlowLink } from '../components/glow-box-link';
import { HeroBg } from '../components/hero-bg';
import { TextHover } from '../components/text-hover.component';
import { personal, socialLinks, heroButtons } from '../data/portfolio';

export const InfoSection = () => {
	const [leftButton, rightButton] = heroButtons;

	return (
		<div className='hero-section'>
			<HeroBg />
			{personal.showRepoStar && (
				<a
					href={personal.repoUrl}
					target='_blank'
					rel='noopener noreferrer'
					className='github-ribbon'
				>
					<div>{personal.repoStarLabel}</div>
					<span></span>
				</a>
			)}

			<FloatingButton
				label={leftButton.label}
				className={leftButton.className}
				href={leftButton.href}
			/>

			<p>{personal.greeting}</p>
			<TextHover
				text={personal.name}
				className='name'
			/>
			<p>{personal.title}</p>

			<FloatingButton
				label={rightButton.label}
				className={rightButton.className}
				href={rightButton.href}
			/>

			<div className='blur'></div>
			<div className='bottom-bar'>
				<GlowLink
					href='/#projects'
					color='rgba(255, 255, 255, 0.4)'
					icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zm-11 11h7v7H3v-7zm11 0h7v7h-7v-7z"/></svg>}
					aria-label='projets'
				/>
				{socialLinks.map((link) => (
					<GlowLink
						key={link.label}
						href={link.href}
						color={link.glowColor}
						icon={<link.icon color={link.iconColor} />}
						aria-label={link.label.toLowerCase()}
					/>
				))}
			</div>
		</div>
	);
};
