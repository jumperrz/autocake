import { OpenAIAgent, TerminalFunctions } from 'openai-agent';
import inquirer from 'inquirer';


// Initialize your OpenAI Agent
const myAgent = new OpenAIAgent(process.env.OPENAI_API_KEY, 'gpt-4');


inquirer
  .prompt([{
    type: 'input',
    name: 'question',
    message: "Hello, how can I assist you?\n"
  }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    main(answers.question);
  })
  .catch((error) => {
    console.error(error);
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


async function main (prompt:String) {
    // Provide your functions to the agent
    const result = await myAgent.runAgent( prompt, [new TerminalFunctions()]);
    console.log("\n", result.content);
}