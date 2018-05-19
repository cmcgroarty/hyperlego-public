import { Match } from './match.model';
import { Table } from './table.enum';
import { Team } from './team.model';

export interface Score {
	id?: number;
	team?: Team;
	match?: Match;
	table_name?: Table;
	total_score?: number;
	score_openingdoors_dooropened?: boolean;
	score_cloud_sdcardup?: boolean;
	score_community_loopnottouching?: boolean;
	score_robotics_insertinstalled?: boolean;
	score_robotics_loopnottouching?: boolean;
	score_rightsenses_loopnottouching?: boolean;
	score_outsidethebox_model?: boolean;
	score_outsidethebox_bulb?: boolean;
	score_remotecomm_sliderpulled?: boolean;
	score_searchengine_wheelspun?: boolean;
	score_searchengine_loopremoved?: boolean;
	score_sports_shottaken?: boolean;
	score_sports_goal?: boolean;
	score_engineering_basket?: boolean;
	score_engineering_model?: boolean;
	score_adapting_modelrotated?: boolean;
	score_apprenticeship_modelpresented?: boolean;
	score_apprenticeship_touchingcircle?: boolean;
	score_projectlearning_loops?: number;
	score_penalties_junk?: number;
	score_engagement_dialcolor?: number;
	score_engagement_ticks?: number;
	score_engagement_yellowmoved?: boolean;

}
