import leetcodeImg from "./assets/leetcode.png";
import codingNinjasImg from "./assets/coding.jpeg";
import atcoderImg from "./assets/atcoder.png";
import gfgImg from "./assets/gfg.png";
import codeforcesImg from "./assets/codeforces.png";
import codechefImg from "./assets/codechef.jpeg";

export const buttonData = [
    { id: "leetcode", name: "LeetCode" },
    { id: "codingninjas", name: "Coding Ninjas" },
    { id: "atcoder", name: "AtCoder" },
    { id: "geeksforgeeks", name: "GeeksforGeeks" },
    { id: "codeforces", name: "Codeforces" },
    { id: "codechef", name: "CodeChef" },
  ];
  
  // Object for mapping platform URLs to names
  export const platformNames = {
    "https://leetcode.com/": "LeetCode",
    "https://www.naukri.com/code360/contests": "Coding Ninjas",
    "https://www.naukri.com/code360/challenges": "Coding Ninjas",
    "https://www.naukri.com/code360/events?selected_tab=Coding%20events": "Coding Ninjas",
    "https://atcoder.jp/": "AtCoder",
    "https://www.geeksforgeeks.org/events": "GeeksforGeeks",
    "https://codeforces.com/contests": "Codeforces",
    "https://www.codechef.com/contests": "CodeChef",
  };
  
  // Object for Images
  export const platformImages = {
    LeetCode: leetcodeImg,
    "Coding Ninjas": codingNinjasImg,
    AtCoder: atcoderImg,
    GeeksforGeeks: gfgImg,
    Codeforces: codeforcesImg,
    CodeChef: codechefImg,
  };