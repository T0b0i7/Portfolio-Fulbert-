import { SectionTitle } from '../components/section-title.component';
import { personal } from '../data/portfolio';

export const Contact = () => {
	return (
		<section
			className='contact container'
			id='contact'
		>
			<div style={{ marginBottom: '40px' }}>
				<SectionTitle
					title='Me'
					subTitle='CONTACTER'
				/>
			</div>
			<div className='contact-content'>
				<div className='contact-info'>
					<div className='contact-item'>
						<h3>Téléphone</h3>
						<p>{personal.phone}</p>
						{personal.phone2 && (
							<p>{personal.phone2}</p>
						)}
					</div>
					<div className='contact-item'>
						<h3>Email</h3>
						<p>{personal.email}</p>
					</div>
					<div className='contact-item'>
						<h3>Localisation</h3>
						<p>{personal.location}</p>
					</div>
				</div>
				<div className='contact-form'>
					<form>
						<div className='form-group'>
							<label htmlFor='name'>Nom</label>
							<input
								type='text'
								id='name'
								name='name'
								placeholder='Votre nom'
								required
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								id='email'
								name='email'
								placeholder='votre@email.com'
								required
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='message'>Message</label>
						<textarea
							id='message'
							name='message'
							rows={5}
							placeholder='Votre message...'
							required
						></textarea>
						</div>
						<button type='submit' className='submit-btn'>
							Envoyer le message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};