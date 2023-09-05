import { colors } from "@/styles/colors";
import reaction from "../assets/images/icon-reaction.svg";
import visual from "../assets/images/icon-visual.svg";
import verbal from "../assets/images/icon-verbal.svg";
import memory from "../assets/images/icon-memory.svg";
export const info = [
  {
    category: "Reaction",
    score: 80,
    icon: reaction,
    color: { bgColor: colors.red, textColor: colors.dred },
  },
  {
    category: "Memory",
    score: 92,
    icon: memory,
    color: { bgColor: colors.yellow, textColor: colors.dyellow },
  },
  {
    category: "Verbal",
    score: 61,
    icon: verbal,
    color: { bgColor: colors.green, textColor: colors.dgreen },
  },
  {
    category: "Visual",
    score: 72,
    icon: visual,
    color: { bgColor: colors.blue, textColor: colors.dblue },
  },
];
