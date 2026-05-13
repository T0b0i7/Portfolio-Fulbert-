import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';
import { techStack } from '../data/portfolio';

export const TechStack = () => {
	return (
		<section
			className='tech-stack container'
			id='tech-stack'
		>
			<div style={{ marginBottom: '60px', textAlign: 'center' }}>
				<SectionTitle
					title={techStack.section.title}
					subTitle={techStack.section.subtitle}
				/>
			</div>
			<div className='tech-grid'>
				{techStack.groups.map((group, idx) => (
					<div key={idx}>
						<p>{group.heading}</p>
						<div className='tech-row'>
							{group.items.map((item) => (
								<GlowBox
									key={item.label}
									icon={<item.icon color={item.iconColor} />}
									color={item.glowColor}
									title={item.label}
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
