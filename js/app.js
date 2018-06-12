// 1. The difference between interpolation and concatention is that interpolation is just a constant variable in a string and concantention is the combination of two strings.

 const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a __ b);
  console.log(c __ d);
  console.log('Name' __ 'Name';
  console.log(a __ b __ c);
  console.log(a __ a __ d);
  console.log(e __ 'Kevin');
  console.log(48 __ '48'); 

  // yes, it is an infinite loop because the loop is not finding and break.

  // no, it is not an infinite loop because the true statement does not have a value while false does.

  //I believe the "A" will just keep getting added to itself.

  let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);

//the similiarities are that they both can be infinite loops but "for" hold a constant variable and "while" varies.

for (i=0; i < 1000; i++;)
	console.log("Keep, adding more!")

//the first part of the control statement is the variable
//second part is the expression you will be using to change the variables final answer
//third part of the control statement is the controlled variable

for (i=0; i > 1000; i--;)
	console.log("Don't go to far!)

for (i=1; i <= 10; i++; )
	console.log("Almost there!")

// cd Documents/
// cd funky_ducks/
// cd 06_11_2018_command_line
// mkdir homework_part_2
// cd homework_part_2
// mkdir death_star
// cd death_star
//touch darth_vader.txt princess_leia.txt storm_trooper.txt
// cd ..
// mkdir galaxy_far_far_away
// cd galaxy_far_far_away
// mkdir tatooine
// cd tatooine
// touch luke.txt ben_kenobi.txt
// mkdir millenium_falcon
// cd millenium_falcon
// touch han_solo.txt chewbaca.txt
// mv bem_kenobi.txt obi_wan.txt
// cp storm_trooper.txt ../tatooine
// mv luke.txt ../millenium_falcon
// mv obi_wan.txt ../millenium_falcon
// mv millenium_falcon ../galaxy_far_far_away
// mv millenium_falcon ../death_star
// mv princess_leia.txt ../millenium_falcon
// rm obi_wan.txt
// cd ..
// cd ..
// cd galaxy_far_far_away
// mkdir yavin_4
// mv millenium_falcon ../ yavin_4
// cd yavin_4
// mkdir x_wing
// mv princess_leia.txt ../yavin_4
// mv luke.txt ../x_wing
// mv millenium_falcon ..
// mv x_wing ..
// cd ..
// cd..
// cd death_star
// mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3
// mv darth_vader.txt ../ tie_fighter_1
// cp storm_trooper ../tie_fighter_2
// cp storm_trooper ../tie_fighter_3
// mv tie_fighter_1 ..
// mv tie_fighter_2 ..
// mv tie_fighter_3 ..
// rm tie_fighter_2
// rm tie_fighter_3
// cd ..
// cd ..
// cd x_wing
// touch the_force.txt
// rm -r death_star
// mv x_wing yavin_4
// mv millenium_falcon yavin_4
