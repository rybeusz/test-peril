  
import { fail, warn, message, markdown, danger } from "danger";

fail("This is a failure message");
warn("This is a warning");
message("This is a normal message");
markdown("*Markdown* is also **supported**");

const { additions = 0, deletions = 0 } = danger.github.pr;
message(`:tada: The PR added ${additions} and removed ${deletions} lines.`);

const modifiedMD = danger.git.modified_files.join("- ");
message("Changed Files in this PR: \n - " + modifiedMD);