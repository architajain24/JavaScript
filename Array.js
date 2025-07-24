    const numbers = [1, 2, 3, 4, 6, 7];
    const slicedNumbers = numbers.slice(2, 7); // slicedNumbers is [2, 3, 4]
    console.log(slicedNumbers);

    const numm = [1,3,4,2,5,6,7,5];//splice method
    numm.splice(2,2,9);
    console.log(numm);

    const movies = ["A", "B", "C"];//push
    movies.push(6);
    console.log(movies);

    
    const shops = ["A", "B", "C", 6];//pop
    const newshops = movies.pop();
    console.log(newshops);

    const house = ["Indore", "Tikamgarh", "Delhi", "Pune"]; //shift
    const newhouse = house.shift();
    console.log(newhouse);

    const building = [1, 2, 3, 4];//unshift
    building.unshift(5);
    console.log(building);