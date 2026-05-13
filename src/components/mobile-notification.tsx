import { useEffect, useState } from 'react';

export const MobileNotification = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isDismissed, setIsDismissed] = useState(false);

	useEffect(() => {
		// Vérifier si on est sur mobile
		const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		) || (typeof window !== 'undefined' && window.innerWidth <= 768);

		// Vérifier si l'utilisateur a déjà dismissé la notification
		let dismissed = false;
		try {
			if (typeof localStorage !== 'undefined') {
				dismissed = localStorage.getItem('mobileNotificationDismissed') === 'true';
			}
		} catch (e) {
			// localStorage unavailable
		}

		const shouldShow = isMobile && !dismissed;

		if (shouldShow) {
			// Afficher après un délai (2 secondes)
			const timer = setTimeout(() => {
				setIsVisible(true);
			}, 2000);

			return () => clearTimeout(timer);
		}
	}, []);

	const handleDismiss = () => {
		setIsVisible(false);
		try {
			if (typeof localStorage !== 'undefined') {
				localStorage.setItem('mobileNotificationDismissed', 'true');
			}
		} catch (e) {
			// ignore
		}
		setTimeout(() => setIsDismissed(true), 300);
	};

	const handleGoToPC = () => {
		handleDismiss();
	};

	if (isDismissed) return null;

	return (
		<div
			className={`mobile-notification ${isVisible ? 'show' : ''}`}
			role='dialog'
			aria-label='Notification mobile'
		>
			<div className='notification-content'>
				<div className='notification-icon'>
					<svg
						width='32'
						height='32'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
					>
						<rect x='2' y='3' width='20' height='14' rx='2' ry='2' />
						<line x1='8' y1='21' x2='16' y2='21' />
						<line x1='12' y1='17' x2='12' y2='21' />
					</svg>
				</div>
				<div className='notification-text'>
					<h4>Expérience Optimale sur PC</h4>
					<p>
						Pour une meilleure expérience de navigation, 
						nous vous recommandons de visiter ce portfolio 
						sur un ordinateur.
					</p>
				</div>
				<div className='notification-actions'>
					<button
						className='notification-btn dismiss'
						onClick={handleDismiss}
						aria-label='Fermer'
						type='button'
					>
						<svg
							width='20'
							height='20'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
						>
							<line x1='18' y1='6' x2='6' y2='18' />
							<line x1='6' y1='6' x2='18' y2='18' />
						</svg>
					</button>
					<button
						className='notification-btn pc'
						onClick={handleGoToPC}
						type='button'
					>
						<span>
							<svg
								width='18'
								height='18'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
							>
								<rect x='2' y='3' width='20' height='14' rx='2' ry='2' />
								<line x1='8' y1='21' x2='16' y2='21' />
								<line x1='12' y1='17' x2='12' y2='21' />
							</svg>
						</span>
						Version PC
					</button>
				</div>
			</div>
			
			{/* Progress bar pour auto-dismiss optionnel */}
			<div className='notification-progress'>
				<div className='progress-bar'></div>
			</div>
		</div>
	);
};