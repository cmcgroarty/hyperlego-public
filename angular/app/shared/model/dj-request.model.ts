import { TrackObjectFull } from 'spotify_api';
import { v4, v4String } from 'uuid/interfaces';
import { DJRequestStatus } from './dj-request-status.enum';

export interface DJRequest {
	id?: number;
	track?: TrackObjectFull;
	spotify?: string;
	status?: DJRequestStatus;
	requester?: string;
	uuid?: string;
}
