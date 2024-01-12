# Welcome to Star Wars Dex!

Hi, I'm using the Star Wars API for show the information that they provide us, just to be clear, the API doesn't provide images or descriptions about any element, so the images are mocked, please enjoy the app and I gonna wait your comments, thanks.

**Fernando Paredes Rios**


# How to use the app?

You can access to the deployer version of the app on the next link [star-wars-dex-link](https://star-wars-dex.vercel.app/)


## What if I want to run the app on my machine?

You can clone the present repository and follow the next steps.

    -> cd star-wars-dex
    -> yarn install or yarn
    -> yarn dev

## The solution to the question on the PDF

I add here the responses for the questions:

**What's a closure?**

 - A closure is a function inside another function than allows the child function access to the variables of the parent function

**Where in the code is there a closure?**

 - Inside the UseEffect hook, who is also a function I use another one and this function can access to the variables that I can declare inside the useEffect hook.

    useEffect(() => {
		const  loadData  =  async () => {
		const  res  =  await  getData(id);
		setData(res.data.results);
		setIsLoading(false);
	};
	loadData();
}, []);

**Which are the potential side-effects in any function?**

 - Some of the effect can be, modifying external variables or global
   variables if the parent function work with this type of variables.

**Could you point out any of these cases in your code? Are they expected? Can they be avoided?**

 - Like I said about the useEffect or the functions inside of the useEffect, they can modify the states for example, if any of them call a setState inside, but in this case is expected that and because I loading data I think that is not necessary avoid this.