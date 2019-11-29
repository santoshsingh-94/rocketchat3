import { getAvatarURL } from './getAvatarURL';
import { settings } from '../../settings';

export const getRoomAvatarURL = function(roomId) {
	const externalSource = (settings.get('Accounts_AvatarExternalProviderUrl') || '').trim().replace(/\/$/, '');
	if (externalSource !== '') {
		return externalSource.replace('{roomId}', roomId);
	}
	if (!roomId) {
		return;
	}
	return getAvatarURL({ roomId });
};
