import leetcodeImg from "../assets/leetcode.png";
import codingNinjasImg from "../assets/coding.jpeg";
import atcoderImg from "../assets/atcoder.png";
import gfgImg from "../assets/gfg.png";
import codeforcesImg from "../assets/codeforces.png";
import codechefImg from "../assets/codechef.jpeg";
import icpcImg from "../assets/icpc.png";
import topcoderImg from "../assets/topcpder.jpeg";
import acmImg from "../assets/acm.jpeg";
import icfpConferenceImg from "../assets/icpcc.png";

let data;
async function fetchAndStoreData() {
  try {
    const response = await fetch('http://localhost:8080/api/getAllContest');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = await response.json();
    if (data && data.object) {
      data = data.object;
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
await fetchAndStoreData();

const buttonData = [
  { id: "leetcode", name: "LeetCode" },
  { id: "codingninjas", name: "Coding Ninjas" },
  { id: "atcoder", name: "AtCoder" },
  { id: "geeksforgeeks", name: "GeeksforGeeks" },
  { id: "codeforces", name: "Codeforces" },
  { id: "codechef", name: "CodeChef" },
  { id: "icpc", name: "ICPC" },
  { id: "topcoder", name: "TopCoder" },
  { id: "acm", name: "ACM" },
  { id: "icpcc", name: "ICFP Conference" },
];

// Object for mapping platform URLs to names
const platformNames = {
  "leetcode.com": "LeetCode",
  "codingninjas.com/codestudio": "Coding Ninjas",
  "atcoder.jp": "AtCoder",
  "atcoder.jp?lang=ja": "AtCoder",
  "geeksforgeeks.org": "GeeksforGeeks",
  "codeforces.com": "Codeforces",
  "codechef.com": "CodeChef",
  "icpc.global": "ICPC",
  "topcoder.com": "TopCoder",
  "acm.bsuir.by": "ACM",
  "acm.bsu.by": "ACM",
  "icfpconference.org": "ICFP Conference",
};

// Object for Images
const platformImages = {
  LeetCode: leetcodeImg,
  "Coding Ninjas": codingNinjasImg,
  AtCoder: atcoderImg,
  GeeksforGeeks: gfgImg,
  Codeforces: codeforcesImg,
  CodeChef: codechefImg,
  ICPC: icpcImg,
  TopCoder: topcoderImg,
  ACM: acmImg,
  "ICFP Conference": icfpConferenceImg,
};

const exportData = { data, platformNames, platformImages, buttonData };
export default exportData;
