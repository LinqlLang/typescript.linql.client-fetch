
// import { LinqlContext, LinqlSearch } from "linql.client";
// import { State } from "./DataModel.mjs";
// import * as linqlCore from "linql.core";
// import * as linqlClient from "linql.client";
import { test } from "linql.client";

class LinqlNodeExample
{
    // context = new linqlClient.LinqlContext(linqlClient.LinqlSearch, "https://localhost:7113", { this: this });


    async Run()
    {
        // const testVar = new linqlClient.test();
        console.log('hello');
        const testVar = new test();
        console.log(testVar);
        // const states = this.context.Set<State>(State)
        // const firstState = await states.FirstOrDefaultAsync();
        // console.log(firstState.State_Name);
    }

}

export async function Main(): Promise<any>
{
    // const test = linqlCore.LinqlBinary;
    const example = new LinqlNodeExample();
    await example.Run();

}