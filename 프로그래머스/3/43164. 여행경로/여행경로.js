function solution(tickets) {
    const graph = {};
    
    for (const [from, to] of tickets) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }
    
    for (const key in graph) {
        graph[key].sort();
    }
    
    const route = ["ICN"];
    const totalTickets = tickets.length;
    
    function dfs(cur) {
        if (route.length === totalTickets + 1) {
            return true;
        }
        
        if (!graph[cur] || graph[cur].length === 0) {
            return false;
        }
        
        for (let i=0; i<graph[cur].length; i++) {
            const next = graph[cur][i];
            
            graph[cur].splice(i, 1);
            route.push(next);
            
            if (dfs(next)) return true;
            
            route.pop();
            graph[cur].splice(i, 0, next);
        }
        
        return false;
    }
    
    dfs("ICN");
    return route;
}