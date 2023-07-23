function findPath(tickets) {
    // Create an adjacency list to represent the graph
    const graph = {};
    for (const [from, to] of tickets) {
      if (!graph[from]) graph[from] = [];
      graph[from].push(to);
    }
  
    // Sort the destinations in lexical order to ensure the smallest path
    for (const from in graph) {
      graph[from].sort();
    }
  
    const itinerary = ["A"]; // The initial departure airport A
    const visited = {};
  
    function dfs(node) {
      const destinations = graph[node];
      if (destinations) {
        for (let i = 0; i < destinations.length; i++) {
          const destination = destinations[i];
          const key = `${node}-${destination}`;
          if (!visited[key]) {
            visited[key] = true;
            itinerary.push(destination);
            dfs(destination);
          }
        }
      }
    }
  
    dfs("A"); // Start DFS from the initial airport A
  
    return itinerary;
  }
  
  // Test cases
  console.log(findPath([["C", "F"], ["A", "C"], ["I", "Z"], ["F", "I"]])); // ➞ ["A", "C", "F", "I", "Z"]
  console.log(findPath([["A","C"],["A","B"],["C","B"],["B","A"],["B","C"]])); // ➞ ["A","B","A","C","B","C"]
  console.log(findPath([["Y", "L"], ["D", "A"],["A", "D"], ["R", "Y"], ["A", "R"]])); // ➞ ["A", "D", "A", "R", "Y", "L"]
  