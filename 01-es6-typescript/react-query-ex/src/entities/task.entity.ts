/**

interface for the task we are getting from the server

 */
 
export interface Task {
	id: number;
	title: string;
	description: string;
	group: string;
}