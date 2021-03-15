/**
{
	id:
	title
	description
}

 */
 
 export class Task {
	id: number = 0;
	title: string = '';
	description: string = '';
	 
	constructor(json: any) {
		Object.assign(this, json);
	} 
	
	calculateLenghtOfTitleAndDescription() {
		return this.title.length + this.description.length;
	}
 }