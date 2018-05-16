import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable( {
	providedIn: 'root'
} )
export class APIService {
	private readonly _url: string;
	private readonly _prefix: string;
	private readonly _port: string;
	private readonly _socket: string;

	constructor() {
		this._port = ( environment.api.port ? ':' + environment.api.port : '' );
		this._prefix = environment.api.prefix;
		this._socket = environment.api.protocol.concat( environment.api.resource,
			this._port );
		this._url = this._socket.concat( this._prefix );


	}

	get socket(): string {
		return this._socket;
	}

	get prefix(): string {
		return this._prefix;
	}

	get port(): string {
		return this._port;
	}

	get url(): string {
		return this._url;
	}
}
