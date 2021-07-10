function createGraph(V , E){
	// V is the no of vertex
	// E is the set of edges
	let adjacency_list = [] ;
	for(let i = 0 ; i < V ; i++){
		adjacency_list.push([]) ;
	}
	for(let i = 0 ; i < E.length ; i++){
		adjacency_list[E[i][0]].push([E[i][1] , E[i][2]]) ;
		adjacency_list[E[i][1]].push([E[i][0] , E[i][2]]) ;
	}
	return adjacency_list ;

	const V = 5 ;
	const Edges = [[1,2,3],[1,4,2],[4,3,3],[3,5,1]] ;
	let graph = createGraph(V , Edges) ;
	console.log() ;
}