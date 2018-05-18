import { TrackObjectFull } from 'spotify_api';
import { v4 } from 'uuid/interfaces';
import { DJRequestStatus } from './dj-request-status.model';

export interface DJRequest {
	id?: number;
	track?: TrackObjectFull;
	spotify?: string;
	status?: DJRequestStatus;
	requester?: string;
	uuid?: v4;
}
