import { MouseTrail } from './components/mouse-trail';
import { ScrollBar } from './components/scroll-bar';
import { AboutMe } from './sections/about-me.section';
import { InfoSection } from './sections/info.section';
import { TechStack } from './sections/tech-stack.section';
import { Projects } from './sections/projects.section';
import { Contact } from './sections/contact.section';
import './styles/about-me.css';
import './styles/floating-button.css';
import './styles/glow-box.css';
import './styles/info-section.css';
import './styles/mouse-trail.css';
import './styles/hero-bg.css';
import './styles/tech-stack.css';
import './styles/text-hover.css';
import './styles/title.css';
import './styles/projects.css';
import './styles/contact.css';
import './styles/responsive.css';
import './styles/mobile-optimizations.css';
import './styles/mobile-fixes.css';

function App() {
	return (
		<>
			<ScrollBar />
			<MouseTrail />
			<InfoSection />
			<AboutMe />
			<Projects />
			<TechStack />
			<Contact />
		</>
	);
}

export default App;
