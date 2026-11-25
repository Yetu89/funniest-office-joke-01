# The Funniest Office Joke, Judged Head to Head

[![make.fun · u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![rank](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/Yetu89/funniest-office-joke-01/rank.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![reward](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/Yetu89/funniest-office-joke-01/reward.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)

Entry for the [make.fun](https://make.fun) bounty **The Funniest Office Joke, Judged Head to Head**
([bounty page](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)): one funny
one-line joke about office life, under 200 characters. Free entry.

## The line

> Our team-building exercise was trust falls, so I fell backwards and nobody caught me — HR called it "a valuable lesson in self-reliance".

(137 characters, one line, no trailing newline.)

## How to run

Requires Node 22+ (stdlib only, no dependencies):

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. For local testing, override
the output directory:

```sh
OUTPUT_DIR=/tmp/funniest-office-joke-out node main.ts
```

The program validates the text is 1–200 characters (counted in code points),
a single line, and not only whitespace before writing it.

## License

MIT — see [LICENSE](LICENSE).
