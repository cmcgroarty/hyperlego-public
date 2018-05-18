import { AbstractControl, ValidatorFn } from '@angular/forms';

export function explicitTrackValidator( track ): ValidatorFn {
	return ( control: AbstractControl ): { [ key: string ]: any } => {
		const explicit = ( track() ? track().explicit : false );
		return explicit ? { 'explicitTrack': 'We cannot play an explicit track' } : null;
	};
}
