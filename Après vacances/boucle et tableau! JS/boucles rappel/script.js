
const people =['Mounia','Barbara', 'Manon','Charlotte', 'Meryame'];

console.log(people);

//tri à bulle
for (let i = 0; i < people.length -1; i++) {
    for (let k = 0; k < people.length -1; k++) {
        
        const personA = people[k].toUpperCase();
        const personB= people[k+1].toUpperCase();
    
       /*  console.log(person);
        console.log(person.chartAt[0]);   */ //personne [0] //chartAt permet de recup la remière lettre! comme personne [0]
        
        //si on veut coco le voisin de le meryame:
        const lettreA = personA.charAt(0);
        const lettreB = personB.charAt(0);
    
        if(personA > personB){
            const temp = people[k];
            people[k]= people [k+1];
            people[k+1]= temp;
        }
        //là ça l'a triéer
    }
    console.log(people);    
}
console.log(people); 
        
