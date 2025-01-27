import figlet from "figlet";
import { colors } from "./colors.js";

export function getBanner() {
  const banner = figlet.textSync("Ryddd29", {
    font: "ANSI Shadow",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 150,
  });

  let output = [];
  output.push(`${colors.bannerText}${banner}${colors.reset}`);
  output.push(
    `${colors.bannerBorder}===============================================${colors.reset}`
  );
  output.push(
    `${colors.bannerLinks}GitHub    : https://github.com/ryzwan29${colors.reset}`
  );
  output.push(
    `${colors.bannerLinks}Telegram  : https://t.me/ryddd29${colors.reset}`
  );
  output.push(
    `${colors.bannerLinks}X         : https://x.com/faridchan13${colors.reset}`
  );
  output.push(
    `${colors.bannerLinks}Instagram : https://instagram.com/0xryddd29${colors.reset}`
  );
  output.push(
    `${colors.bannerBorder}===============================================\n${colors.reset}`
  );

  return output.join("\n");
}
