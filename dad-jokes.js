// variables 

let btn = document.querySelector('#button');
let setup = document.querySelector('.setup');
let punchLine = document.querySelector('.punchline')

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * jokes.length);
    
    setup.innerText = jokes[random].setup;
    punchLine.innerText = jokes[random].punchLine;

})

const jokes = [
   
    {
        setup: 'What does a baby computer call his father?',
        punchLine: 'Data.'
    }, {
        setup: 'After an unsuccessful harvest, why did the farmer decide to try a career in music?',
        punchLine: 'Because he had a ton of sick beets.'
    }, {
        setup: `My friend was showing me his tool shed and pointed to a ladder. “That's my stepladder,” he said.`,
        punchLine: `"I never knew my real ladder.”`
    }, {
        setup: `What do you call a Frenchman wearing sandals?`,
        punchLine: `Philippe Flop.`
    }, {
        setup: `Why is it so cheap to throw a party at a haunted house?`,
        punchLine: `Because the ghosts bring all the boos.`
    }, {
        setup: `I don’t get why Marvel doesn\’t use the Hulk to advertise more.`,
        punchLine: `He\’s basically one big Banner.`
    }, {
        setup: `What brand of underwear do scientists wear?`,
        punchLine: `Kelvin Klein.`
    }, {
        setup: `Which days are the strongest? Saturday and Sunday.`,
        punchLine: `The rest are weekdays.`
    }, {
        setup: `I just found out I’m colorblind.`,
        punchLine: `The news came out of the purple!`
    }, {
        setup: `Did you know your pupils are the last part to stop working when you die?`,
        punchLine: `I said, "I always have a few Twix up my sleeve."`
    }, {
        setup: `My wife asked me the other day where I got so much candy.`,
        punchLine: `I said, "I always have a few Twix up my sleeve."`
    }, {
        setup: `How do cows stay up to date?`,
        punchLine: `They read the Moo-spaper.`
    }, {
        setup: `What's the difference between a well-dressed man on a unicycle and a poorly-dressed man on a bicycle?`,
        punchLine: `Attire.`
    }, {
        setup: `Where do pirates get their hooks?`,
        punchLine: `Second hand stores.`
    },{
        setup: `Of all the inventions of the last 100 years`,
        punchLine: `The dry erase board has to be the most remarkable.`
    },{
        setup: `In America`,
        punchLine: `using the metric system can get you in legal trouble.`
    },{
        setup: `What do you call a line of men waiting to get haircuts?`,
        punchLine: `A barberqueue.`
    },{
        setup: `In fact, if you sneer at any other method of measuring liquids`,
        punchLine: `you may be held in contempt of quart.`
    },{
        setup: `Who were the greenest Presidents in US history?`,
        punchLine: `The bushes.`
    },{
        setup: `My hotel tried to charge me ten dollars extra for air conditioning.`,
        punchLine: `That wasn’t cool.`
    },{
        setup: `What do you call a beehive without an exit?`,
        punchLine: `Unbelievable.`
    },{
        setup: `Did you know that the first french fries weren’t cooked in France?`,
        punchLine: `They were cooked in Greece.`
    },{
        setup: `This morning, Siri said, “Don’t call me Shirley.”`,
        punchLine: `I accidentally left my phone in Airplane mode.`
    },{
        setup: `It's easy to convince ladies not to eat Tide Pods,`,
        punchLine: `but harder to deter gents.`
    },{
        setup: `I asked my date to meet me at the gym but she never showed up.`,
        punchLine: `I guess the two of us aren't going to work out.`
    },{
        setup: `How do you find Will Smith in a snowstorm?`,
        punchLine: `You look for fresh prints.`
    },{
        setup: `The difference between a numerator and a denominator is a short line.`,
        punchLine: `Only a fraction of people will understand this`
    },{
        setup: `I found a wooden shoe in my toilet today.`,
        punchLine: `It was clogged.`
    },{
        setup: `I just broke up with my mathematician girlfriend.`,
        punchLine: `She was obsessed with an X.`
    },{
        setup: `I can't take my dog to the pond anymore because the ducks keep attacking him.`,
        punchLine: `That's what I get for buying a pure bread dog.`
    },{
        setup: `To whoever stole my copy of Microsoft Office, I will find you.`,
        punchLine: `You have my Word.`
    },{
        setup: `What’s Forrest Gump’s password?`,
        punchLine: `1forrest1.`
    },{
        setup: `I used to run a dating service for chickens.`,
        punchLine: `But I was struggling to make hens meet.`
    },{
        setup: `What do you call bears with no ears?`,
        punchLine: `B.`
    },{
        setup: `If prisoners could take their own mug shots`,
        punchLine: `They’d be called cellfies`
    },{
        setup: `Have you heard about those new corduroy pillows?`,
        punchLine: `They're making headlines.`
    },{
        setup: `If a pig loses its voice`,
        punchLine: `does it become disgruntled?`
    },{
        setup: `Wanna hear a joke about paper?`,
        punchLine: `Never mind. It's tearable.`
    },{
        setup: `A panic-stricken man explained to his doctor, “You have to help me, I think I’m shrinking.” “Now settle down,” the doctor calmly told him.`,
        punchLine: `“You'll just have to learn to be a little patient.”`
    },{
        setup: `What do you call a bundle of hay in a church?`,
        punchLine: `Christian Bale.`
    },{
        setup: `A ship carrying red paint and a ship carrying blue paint collide in the middle of the ocean.`,
        punchLine: `Both crews were marooned.`
    },{
        setup: `What is a guitar player's favorite Italian food?`,
        punchLine: `Strum-boli.`
    },{
        setup: `How does cereal pay its bills?`,
        punchLine: `With Chex.`
    },{
        setup: `My grief counselor died the other day.`,
        punchLine: `He was so good at his job, I don’t even care.`
    },{
        setup: `Give a man a plane ticket and he flies for the day.`,
        punchLine: `Push him out of the plane at 3,000 feet and he’ll fly for the rest of his life.`
    },{
        setup: `As I get older, I remember all the people I lost along the way.`,
        punchLine: `Maybe a career as a tour guide was not the right choice.`
    },{
        setup: `I was reading a great book about an immortal dog the other day.`,
        punchLine: `It was impossible to put down.`
    },{
        setup: `What do you call someone who refuses to fart in public?`,
        punchLine: `A private tutor.`
    },{
        setup: `I just read that someone in London gets stabbed every 52 seconds.`,
        punchLine: `Poor bastard.`
    },{
        setup: `The guy who stole my diary just died.`,
        punchLine: `My thoughts are with his family.`
    },{
        setup: `Do you know the last thing my grandfather said to me before he kicked the bucket?`,
        punchLine: `“Grandson, watch how far I can kick this bucket.”`
    },{
        setup: `If you donate a kidney, everybody loves you and you’re a total hero.`,
        punchLine: `But try donating five kidneys and suddenly everyone is yelling and the police get called.`
    },{
        setup: `I have a fish that can breakdance.`,
        punchLine: `Only for ten seconds though, and only once.`
    },{
        setup: `My friend said that if he went off a cliff, it would be on his own accord.`,
        punchLine: `It’s a good thing he drives a Civic.`
    },{
        setup: `In my free time, I like to help blind people.`,
        punchLine: `Verb, not adjective`
    },{
        setup: `A doctor walks into a room with a dying patient and tells him, “I’m sorry, but you only have ten left.” The patient asks him, “Ten what, Doc? Hours? Days? Weeks?”`,
        punchLine: `The doctor calmly looks at him and says, “Nine.”`
    },{
        setup: `What’s the difference between a wizard who raises the undead and a sexy vampire?`,
        punchLine: `One is a necromancer and the other is a neck romancer.`
    },{
        setup: `A man walks into a magic forest and tries to cut down a talking tree. “You can't cut me down,” the tree complains. “I’m a talking tree!”`,
        punchLine: `The man responds, “You may be a talking tree, but you will dialogue.”`
    },{
        setup: `I heard Sony’s coming out with a new console during the pandemic`,
        punchLine: `It’s called the Plaguestation 5.`
    },{
        setup: `When my uncle Frank died, he wanted his remains to be buried in his favorite beer mug.`,
        punchLine: `His last wish was to be Frank in Stein.`
    },{
        setup: `A man walks into a bar. The bartender asks, "What do you want?" The man says, "Oh, just some fruit punch." The bartender sighs and shakes his head, "If you want punch, you're gonna have to wait in line."`,
        punchLine: `The man looks around, but there is no punchline.`
    },{
        setup: `What’s worse than biting into an apple and finding a worm?`,
        punchLine: `Biting into an apple and finding half a worm.`
    },{
        setup: `I just got my doctor's test results and I’m really upset.`,
        punchLine: `Turns out, I’m not gonna be a doctor.`
    },{
        setup: `My wife left a note on the fridge that said, “This isn't working.” I’m not sure what she’s talking about.`,
        punchLine: `I opened the fridge door and it’s working fine!`
    },{
        setup: `Have you heard about the restaurant on the moon?`,
        punchLine: `Great food, no atmosphere.`
    },{
        setup: `People in Athens rarely get up before sunrise.`,
        punchLine: `Dawn is tough on Greece.`
    },{
        setup: `Why'd the alternate universe Spider-Man do so well on his driving test?`,
        punchLine: `He's an excellent parallel Parker.`
    },{
        setup: `Never date a tennis player.`,
        punchLine: `Great food, no atmosphere.`
    },{
        setup: `What's a lawyer's favorite drink?`,
        punchLine: `Subpoena colada.`
    },{
        setup: `What did Yoda say when he saw himself in 4K?`,
        punchLine: `HDMI.`
    },{
        setup: `What do you call a wizard who's really bad at football?`,
        punchLine: `Fumbledore.`
    },{
        setup: `I used to hate facial hair`,
        punchLine: `but then it grew on me.`
    },{
        setup: `What's blue and not very heavy?`,
        punchLine: `Light blue.`
    },{
        setup: `I don't get why bakers aren't wealthier.`,
        punchLine: `They make so much dough.`
    },{
        setup: `How do you make a tissue dance?`,
        punchLine: `You put a little boogie in it.`
    },{
        setup: `I asked my wife if I was the only one she slept with. She said yes`,
        punchLine: `he others were 7’s and 8’s.`
    },{
        setup: `How do flat-earthers travel?`,
        punchLine: `On a plane.`
    },{
        setup: `My wife left me because of my obsession with pasta.`,
        punchLine: `I'm feeling cannelloni right now.`
    },{
        setup: `Imagine if you walked into a bar and there was a long line of people waiting to take a swing at you.`,
        punchLine: `That’s the punch line.`
    },{
        setup: `What’s an astronaut’s favorite part of the computer?`,
        punchLine: `The Space Bar.`
    },{
        setup: `I was playing chess with my friend and he said, “Let’s make this interesting.”`,
        punchLine: `So we stopped playing chess.`
    },{
        setup: `I was in a job interview the other day and they asked if I could perform under pressure.`,
        punchLine: `I said no, but I could perform Bohemian Rhapsody.`
    },{
        setup: `Today I’m attaching a light to the ceiling`,
        punchLine: `but I’m afraid I’ll probably screw it up.`
    },{
        setup: `I hate it when people say age is only a number.`,
        punchLine: `Age is clearly a word.`
    },{
        setup: `I can't take my dog to the pond anymore because the ducks keep attacking him.`,
        punchLine: `That's what I get for buying a pure bread dog.`
    },{
        setup: `Someone complimented my parking today!`,
        punchLine: `They left a sweet note on my windshield that said “parking fine.”`
    },{
        setup: `I was excited to hear Apple might start selling its own cars`,
        punchLine: `until learned they wouldn’t support windows.`
    },{
        setup: `I just applied for a job down at the diner.`,
        punchLine: `I told them I really bring a lot to the table.`
    },{
        setup: `"Cop: I'm arresting you for downloading the entire Wikipedia."`,
        punchLine: `Man: "Wait! I can explain everything!"`
    },{
        setup: `My friend couldn't afford to pay his bill,`,
        punchLine: `so I sent him a "Get Well Soon" card.`
    },{
        setup: `I'm Buzz Aldrin, second man to step on the moon.`,
        punchLine: `Neil before me.`
    },{
        setup: `Why was 2019 afraid of 2020?`,
        punchLine: `Because they had a fight and 2021.`
    },{
        setup: `Did you hear Bruce Springsteen changed the lyrics to one of his songs?`,
        punchLine: `What’s he going to change next—his hair? His clothes? His face?`
    },{
        setup: `This year’s Fibonacci convention is going to be really special.`,
        punchLine: `Apparently it’s as big as the last two put together.`
    },{
        setup: `An apple a day keeps the doctor away.`,
        punchLine: `At least it does if you throw it hard enough.`
    },{
        setup: `I’m addicted to collecting vintage Beatles albums.`,
        punchLine: `I need Help.`
    },{
        setup: `In 2017 I didn't do a marathon. I didn't do one in 2018, 2019, or 2020, either.`,
        punchLine: `This is a running joke.`
    },{
        setup: `Not to brag but I made six figures last year.`,
        punchLine: `I was also named worst employee at the toy factory.`
    },{
        setup: `Ever since we started quarantining`,
        punchLine: `I've only been telling inside jokes.`
    },{
        setup: `If you're feeling depressed, try drinking a gallon of water before you go to sleep.`,
        punchLine: `It'll give you a reason to get out of bed in the morning.`
    },{
        setup: `My landlord told me we need to talk about the heating bill.`,
        punchLine: `"Sure," I said. "My door is always open."`
    },{
        setup: `I built a model of Mount Everest and my son asked if it was to scale.`,
        punchLine: `"No," I said. "It's to look at."`
    },{
        setup: `What has five toes and isn't your foot?`,
        punchLine: `My foot.`
    },{
        setup: `My friend claims he glued himself to his autobiography.`,
        punchLine: `I don't believe him, but that's his story and he's sticking to it.`
    },{
        setup: `When I was a kid, my mother told me I could be anyone I wanted to be.`,
        punchLine: `Turns out, identity theft is a crime.`
    },{
        setup: `What's brown and sticky?`,
        punchLine: `A stick.`
    },{
        setup: `My doctor told me I was going deaf.`,
        punchLine: `The news was hard for me to hear.`
    },{
        setup: `A century ago, two brothers decided it was possible to fly. `,
        punchLine: `And as you can see, they were Wright.`
    },{
        setup: `I'm reading a horror story in braille.`,
        punchLine: `Something bad is going to happen, I can just feel it.`
    },{
        setup: `Anyone looking to buy a Delorean? Good shape, good mileage.`,
        punchLine: `Only driven from time to time`
    },{
        setup: `During my calculus test, I had to sit between identical twins.`,
        punchLine: `It was hard to differentiate between them.`
    },{
        setup: `Does anybody know where a guy can find a person to hang out with, talk to, and enjoy spending time with? `,
        punchLine: `I'm just asking for a friend.`
    },{
        setup: `Why did the Invisible Man turn down a job offer?`,
        punchLine: `He couldn’t see himself doing it.`
    },{
        setup: `When I die, I want to be cremated.`,
        punchLine: `It’s my last chance to have a smokin’ hot body.`
    },{
        setup: `“Just say NO to drugs!”`,
        punchLine: `Well, if I’m talking to drugs, I probably already said yes.`
    },{
        setup: `I once saw a one-handed man in a second-hand store. `,
        punchLine: `I told him, “I don’t think they have what you’re looking for, sir.”`
    },{
        setup: `What do you call a sad cup of coffee?`,
        punchLine: `Depresso.`
    },{
        setup: `What did one monocle say to the other monocle?`,
        punchLine: `Let's get together and make a spectacle of ourselves.`
    },{
        setup: `How come the Hulk doesn't lose his pants when he transforms?`,
        punchLine: `The experiment altered his jeans.`
    },{
        setup: `I didn't want to believe that my dad was stealing from his job as a traffic cop, but when I got home`,
        punchLine: `all the signs were there.`
    },{
        setup: `I just spent $300 on a limo and learned it doesn't come with a driver.`,
        punchLine: `I can't believe I have nothing to chauffer it.`
    },{
        setup: `What’s green and has wheels?`,
        punchLine: `Grass. I lied about the wheels.`
    },{
        setup: `I have a joke about trickle down economics.`,
        punchLine: `But 99% of you will never get it.`
    },{
        setup: `What’s the best thing about living in Switzerland?`,
        punchLine: `I don’t know, but the flag is a big plus.`
    },{
        setup: `At the job interview, they asked me, “Where do you see yourself in five years?”`,
        punchLine: `I told him, “I think we’ll still be using mirrors in five years.”`
    },{
        setup: `A buddy asked how many fish I caught.`,
        punchLine: `I told him it’s not polite to fish and tell.`
    },{
        setup: `How many clickbait articles does it take to change a lightbulb? `,
        punchLine: `The answer will shock you!`
    },{
        setup: `How do you make a water bed bouncier?`,
        punchLine: `Add spring water.`
    },{
        setup: `I always knock on the fridge door before opening it`,
        punchLine: `just in case there's a salad dressing.`
    },{
        setup: `What kind of fruit do ghosts like?`,
        punchLine: `Boo-berries.`
    },{
        setup: `I tried to start a professional hide and seek team, but it didn't work out.`,
        punchLine: `Turns out, good players are hard to find.`
    },{
        setup: `Women should not have children after 36—really,`,
        punchLine: `36 children is enough.`
    },{
        setup: `What happens when frogs park illegally?`,
        punchLine: `They get toad.`
    },{
        setup: `Lance isn't that common a name these days, but in medieval times`,
        punchLine: `they were called lance-a-lot.`
    },{
        setup: `I had an appointment to see my psychic next week, but she just called to cancel.`,
        punchLine: `She said I won’t be able to make it.`
    },{
        setup: `I used to be addicted to soap`,
        punchLine: `but I’m clean now.`
    },{
        setup: `I wanted my kids to watch the orchestra, but I had to turn it off`,
        punchLine: `too much sax and violins.`
    },{
        setup: `A cop started crying while he was writing me a ticket.`,
        punchLine: `I asked him why and he said, "It's a moving violation."`
    },{
        setup: `Swords will never go obsolete.`,
        punchLine: `They're cutting edge technology.`
    },{
        setup: `I asked the IT guy, "How do you make a Motherboard?"`,
        punchLine: `He said, "I tell her about my job."`
    },{
        setup: `What do you call it when James Bond takes a bath?`,
        punchLine: `Bubble 07.`
    },{
        setup: `30 percent of pet owners let their pets sleep in their bed.`,
        punchLine: `I tried it and my goldfish died.`
    },{
        setup: `You used to be able to get air for free at gas stations, but now it's a $1.`,
        punchLine: `That's inflation for you.`
    },{
        setup: `My dad was born a conjoined twin, but separated at birth.`,
        punchLine: `So I have an uncle, once removed.`
    },{
        setup: `Why is it a bad idea to eat a clock?`,
        punchLine: `Because it's so time-consuming.`
    },{
        setup: `I went to a smoke shop only to discover it’d been replaced by an apparel store.`,
        punchLine: `Clothes, but no cigar.`
    },{
        setup: `Why should you never brush your teeth with your left hand? `,
        punchLine: `Because a toothbrush works better.`
    },
    
]

