const dataString = `Name of Exercise,Sets,Reps,Benefit,Calories Burned,Target Muscle Group,Equipment Needed,Difficulty Level
Push-ups,3,15,Builds upper body strength,200,"Chest-Triceps-Shoulders",None,Intermediate
Squats,4,10,Strengthens lower body,223,"Quadriceps-Hamstrings-Glutes",None,Beginner
Lunges,3,10,Improves balance and coordination,275,"Quadriceps-Hamstrings-Glutes",None,Beginner
Burpees,3,10,Full body workout,355,Full Body,None,Advanced
Mountain Climbers,3,20,Improves cardiovascular fitness,240,"Core-Shoulders-Legs",None,Intermediate
Jumping Jacks,3,30,Improves coordination and cardiovascular health,295,Full Body,None,Beginner
Bicycle Crunches,3,20,Targets abdominal muscles,210,Core,None,Intermediate
Dips,3,12,Strengthens triceps and chest,180,"Triceps-Chest",Parallel Bars or Chair,Intermediate
Pull-ups,3,8,Builds upper body strength,250,"Back-Biceps",Pull-up Bar,Advanced
Russian Twists,3,20,Improves core rotation strength,190,"Core-Obliques",None or Dumbbell,Intermediate
Leg Raises,3,15,Strengthens lower abs,185,Lower Abs,None,Intermediate
Deadlifts,4,8,Strengthens back and legs,315,"Back-Hamstrings-Glutes",Barbell,Advanced
Bench Press,4,10,Builds chest strength,280,"Chest-Triceps","Bench-Barbell",Intermediate
Rows,3,12,Improves posture and back strength,260,"Back-Biceps",Dumbbells or Barbell,Intermediate
Shoulder Press,3,10,Strengthens shoulders,230,"Shoulders-Triceps",Dumbbells or Barbell,Intermediate
Calf Raises,3,20,Builds calf muscles,150,Calves,None or Dumbbells,Beginner
Tricep Extensions,3,12,Isolates and strengthens triceps,170,Triceps,Dumbbells,Intermediate
Lateral Raises,3,12,Builds shoulder width,165,Shoulders,Dumbbells,Intermediate
Glute Bridges,3,15,Activates and strengthens glutes,200,"Glutes-Hamstrings",None,Beginner
Superman,3,12,Improves lower back strength,180,"Lower Back-Glutes",None,Beginner
Box Jumps,4,10,Builds explosive power,320,"Legs-Core",Box or Platform,Advanced
Kettlebell Swings,3,15,Improves hip power and cardiovascular fitness,335,"Glutes-Hamstrings-Core",Kettlebell,Intermediate
Step-ups,3,12,Builds unilateral leg strength,260,"Quadriceps-Hamstrings-Glutes",Step or Box,Intermediate
Face Pulls,3,15,Improves shoulder health and posture,145,"Rear Deltoids-Upper Back",Resistance Band or Cable Machine,Intermediate
Lat Pulldowns,3,12,Strengthens back and improves posture,250,"Back-Biceps",Cable Machine,Intermediate
Reverse Lunges,3,10,Improves balance and leg strength,270,"Quadriceps-Hamstrings-Glutes",None or Dumbbells,Intermediate
Plyo Squats,3,12,Builds lower body power,315,"Quadriceps-Glutes",None,Intermediate
Scissors Kicks,3,20,Strengthens lower abs and hip flexors,195,"Lower Abs-Hip Flexors",None,Intermediate
Tricep Dips,3,12,Isolates triceps,180,Triceps,Bench or Chair,Intermediate
Seated Rows,3,12,Improves back strength and posture,240,"Back-Biceps",Cable Machine or Resistance Band,Intermediate
Flutter Kicks,3,20,Targets lower abs,190,Lower Abs,None,Intermediate
Inverted Rows,3,10,Builds back strength,220,"Back-Biceps",Low Bar or TRX,Intermediate
Bulgarian Split Squats,3,10,Improves unilateral leg strength and balance,290,"Quadriceps-Hamstrings-Glutes",Bench or Step,Advanced
Prone Cobras,3,12,Improves posture and strengthens upper back,160,"Upper Back-Rear Deltoids",None,Beginner
Resistance Band Pull-Aparts,3,15,Improves shoulder health and posture,140,"Upper Back-Rear Deltoids",Resistance Band,Beginner
Wall Angels,3,12,Improves shoulder mobility and posture,130,"Shoulders-Upper Back",Wall,Beginner
Bird Dogs,3,10,Improves core stability and balance,175,"Core-Lower Back",None,Beginner
Plyometric Push-ups,3,8,Builds explosive upper body power,280,"Chest-Triceps-Shoulders",None,Advanced
Decline Push-ups,3,12,Targets upper chest,220,"Upper Chest-Triceps",Bench or Step,Advanced
Incline Push-ups,3,12,Targets lower chest,180,"Lower Chest-Triceps",Bench or Step,Beginner
Dead Bugs,3,12,Improves core stability,165,"Core-Lower Back",None,Beginner
Pistol Squats,3,5,Builds unilateral leg strength and balance,300,"Quadriceps-Hamstrings-Glutes",None,Advanced
Zottman Curls,3,10,Targets biceps and forearms,155,"Biceps-Forearms",Dumbbells,Intermediate
Dragon Flags,3,8,Advanced core exercise,250,Full Core,Bench or Sturdy Surface,Advanced
Renegade Rows,3,10,Improves core stability and upper body strength,280,"Back-Core-Shoulders",Dumbbells,Advanced
Frog Jumps,4,15,Builds lower body power and endurance,310,"Quadriceps-Calves-Glutes",None,Intermediate
Turkish Get-ups,3,5,Enhances full-body coordination and stability,240,"Full Body-Core-Shoulders",Kettlebell,Advanced
Bear Crawls,3,20,Strengthens core and improves mobility,220,"Core-Shoulders-Hips",None,Intermediate
Windshield Wipers,3,12,Targets obliques and improves core rotation,200,"Obliques-Core",Pull-up Bar,Advanced
Thrusters,4,10,Combines lower body and upper body strength,330,"Legs-Shoulders-Core",Dumbbells or Barbell,Advanced`;

function evaluateWorkoutSchedule(level, goal, days){
    function levelFilter(){ // EXPERIENCE
        if (level === 0) return (e) => e["Difficulty Level"] === "Beginner";
        else if (level === 1) return (e) => e["Difficulty Level"] === "Beginner" || e["Difficulty Level"] === "Intermediate";
        else return (e) => true;
    }
    function organize(exerciseTypes, exercise){
        const str = exercise["Target Muscle Group"];
        if (str.includes("Chest") || str.includes("Tricep") || str.includes("Shoulder")) exerciseTypes[0].push(exercise);
        if (str.includes("Back") || str.includes("Biceps") || str.includes("Rear Deltoids") || str.includes("Forearms")) exerciseTypes[1].push(exercise);
        if (str.includes("Core") || str.includes("Obliques") || str.includes("Abs")) exerciseTypes[2].push(exercise);
        if (str.includes("Legs") || str.includes("Quadriceps") || str.includes("Hamstrings") || str.includes("Glutes") || str.includes("Calves")) exerciseTypes[3].push(exercise);
        return exerciseTypes
    }
    function goalFilter(){
        if (level === 0) return (e) => true;
        else if (goal === 0) return (e) => e["Reps"] <= 10;
        else if (goal === 1) return (e) => e["Calories Burned"] >= 225;
        else if (goal === 2) return (e) => 8 <= e["Reps"] && e["Reps"] <= 15;
        else if (goal === 3) return (e) => 12 <= e["Reps"];
    }
    function createDays(workouts){ // GOAL & DAY
        const gfilt = goalFilter();
        function wholeBody(types){
            const list = [];
            for (let i = 0; i < 6; i++){
                types.forEach((w) => {
                    let index = i;
                    while(true){
                        if (index < w.length && gfilt(w[index]) && !list.includes(w[index])){
                            list.push(w[index]);
                            break;
                        } else if (index > 50) break;
                        index++;
                    }   
                    if (list.length >= 6) i = 10000;
                });
            } 
            return new Array(days).fill({type: "Whole Body Day", workouts: list});
        }
        function upperLower(types){
            const upper = [];
            const lower = [];
            for (let i = 0; i < 6; i++){
                [0, 1].forEach((n) => {
                    const w = types[n];
                    let index = i;
                    while(true){
                        if (index < w.length && gfilt(w[index]) && !upper.includes(w[index])){
                            upper.push(w[index]);
                            break;
                        } else if (index > 50) break;
                        index++;
                    }   
                    if (upper.length >= 6) i = 10000;
                });
                [2, 3].forEach((n) => {
                    const w = types[n];
                    let index = i;
                    while(true){
                        if (index < w.length && gfilt(w[index]) && !lower.includes(w[index])){
                            lower.push(w[index]);
                            break;
                        } else if (index > 50) break;
                        index++;
                    }   
                    if (lower   .length >= 6) i = 10000;
                });
            } 
            return new Array(days).fill(0).map((e, i) => (i % 2 === 0) ? {type: "Lower Body Day", workouts: lower} : {type: "Upper Body Day", workouts: upper});
        }
        function PPLC(types){
            const push = {type: "Push Day", workouts: types[0].filter(gfilt).slice(0, 6)};
            const pull = {type: "Pull Day", workouts: types[1].filter(gfilt).slice(0, 6)};
            const core = {type: "Core Day", workouts: types[2].filter(gfilt).slice(0, 6)};
            const legs = {type: "Legs Day", workouts: types[3].filter(gfilt).slice(0, 6)};
            if (days === 3) return [push, legs, pull];
            if (days === 4) return [push, legs, pull, legs];
            if (days === 5) return [push, legs, pull, legs, core];
            if (days === 6) return [push, legs, pull, push, pull, legs];
            if (days === 7) return [push, legs, pull, core, push, pull, legs];
        }
        if (days === 1 || (days <= 3) && level <= 1) return wholeBody(workouts);
        if ((level === 2 && days === 2) || level === 0) return upperLower(workouts);
        else return PPLC(workouts);
    }
    const initial = WORKOUT_DATA.filter(levelFilter()).reduce(organize, new Array(4).fill(0).map((e) => new Array(e)));
    return createDays(initial);
    // return initial; 
}

// Function to parse the CSV text into an array of objects
function parseCSV(csvText) {
    const lines = csvText.split('\n'); // Split CSV by rows (lines)
    const headers = lines[0].split(','); // Get column headers from the first row
    const data = [];

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(','); // Split each row into values
        if (values.length === headers.length) { // Ensure the row matches the header length
            const rowObject = {};
            for (let j = 0; j < headers.length; j++) {
                rowObject[headers[j].trim()] = values[j].trim(); // Map header to value
            }
            data.push(rowObject); // Add the object to the result array
        }
    }
    return data;
}

function presentSchedule(schedule){ // [{workoutType, [ARRAY OF WORKOUTS]}]
    const container = document.getElementsByClassName('day-schedule')[0];
    container.innerHTML = "";
    let d = 1
    
    schedule.forEach(day => {
        const dayBlock = document.createElement('div'); // class=day-block"
        dayBlock.className = 'day-block';
        const name = document.createElement('h3');
        name.textContent = "Day "+(d++)+": "+day.type;
        dayBlock.appendChild(name);
        const workoutBlock = document.createElement('div'); // class="workout-block"
        workoutBlock.className = 'workout-block';
        day.workouts.forEach(w => {
            const label = document.createElement('label');
            label.textContent = w['Name of Exercise']+" - reps: "+w['Reps']+" sets: "+w['Sets']; // add sets, reps, and other info?
            const input = document.createElement('input'); // type="checkbox"
            input.type = 'checkbox';
            label.setAttribute('for', input.id); // Make sure the checkbox has an id
            input.id = 'workout-completed';

            workoutBlock.appendChild(input);
            workoutBlock.appendChild(label);
        });
        dayBlock.appendChild(workoutBlock);
        container.appendChild(dayBlock);
    });
}

function total(ex, g, d){
    let EX = 0;
    let G = 0;
    if (ex === "Intermediate") EX = 1;
    else if (ex === "Advanced") EX = 2;
    if (g === "Strength") G = 0;
    else if (g === "Weight Loss") G = 1;
    else if (g === "Muscle Gain") G = 2;
    else if (g === "Endurance") G = 3;

    presentSchedule(evaluateWorkoutSchedule(EX, G, d));
}

const WORKOUT_DATA = parseCSV(dataString);
