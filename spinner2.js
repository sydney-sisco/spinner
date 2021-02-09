const spinner = "|/-\\|/-\\|\n";
let timeout = 100;

for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, timeout)
  timeout += 200;
}
