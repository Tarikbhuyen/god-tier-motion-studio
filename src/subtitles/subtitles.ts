export interface SubtitleCue {
  id: number;
  startFrame: number;
  endFrame: number;
  text: string;
  highlightWords?: string[];
}

export const SUBTITLE_CUES: SubtitleCue[] = [
  {
    id: 1,
    startFrame: 10,
    endFrame: 213,
    text: "Structural drawing এ ঘণ্টার পর ঘণ্টা কাজ এবার শেষ করুন মাত্র কয়েকটি ক্লিকে।",
    highlightWords: ["ঘণ্টার পর ঘণ্টা", "কয়েকটি ক্লিকে"],
  },
  {
    id: 2,
    startFrame: 213,
    endFrame: 382,
    text: "পরিচিত হোন NexDetail এর সাথে। একটি স্মার্ট AutoCAD plugin যা আপনার RCC detailing কে",
    highlightWords: ["NexDetail", "AutoCAD plugin", "RCC detailing"],
  },
  {
    id: 3,
    startFrame: 382,
    endFrame: 487,
    text: "করবে আরও দ্রুত, সহজ এবং professional।",
    highlightWords: ["দ্রুত", "সহজ", "professional"],
  },
  {
    id: 4,
    startFrame: 512,
    endFrame: 676,
    text: "NexDetail এর auto dimension feature এর মাধ্যমে grid, column, pile এবং pile cap",
    highlightWords: ["auto dimension", "grid", "column", "pile", "pile cap"],
  },
  {
    id: 5,
    startFrame: 676,
    endFrame: 738,
    text: "layout এর dimension তৈরি হবে মুহূর্তেই।",
    highlightWords: ["dimension", "মুহূর্তেই"],
  },
  {
    id: 6,
    startFrame: 762,
    endFrame: 908,
    text: "One click auto beam generation দিয়ে সব beam drawing, editing এবং cross section",
    highlightWords: ["One click", "auto beam generation", "cross section"],
  },
  {
    id: 7,
    startFrame: 908,
    endFrame: 954,
    text: "পরিবর্তন করুন automatically।",
    highlightWords: ["automatically"],
  },
  {
    id: 8,
    startFrame: 978,
    endFrame: 1130,
    text: "শুধু তাই নয়, footing, pile ও pile cap drawing থেকে শুরু করে column ও footing",
    highlightWords: ["footing", "pile cap drawing", "column & footing"],
  },
  {
    id: 9,
    startFrame: 1130,
    endFrame: 1201,
    text: "schedule সবই এখন one click এ ready।",
    highlightWords: ["schedule", "one click এ ready"],
  },
  {
    id: 10,
    startFrame: 1224,
    endFrame: 1382,
    text: "সাথে থাকছে professional auto tagging এবং column, beam ও footing এর instant BOQ।",
    highlightWords: ["auto tagging", "instant BOQ"],
  },
  {
    id: 11,
    startFrame: 1405,
    endFrame: 1482,
    text: "সামনে আসছে আরও অনেক powerful feature।",
    highlightWords: ["powerful feature"],
  },
  {
    id: 12,
    startFrame: 1509,
    endFrame: 1650,
    text: "আপনার structural design ও detailing workflow কে আরও smart এবং productive করতে",
    highlightWords: ["structural design", "smart", "productive"],
  },
  {
    id: 13,
    startFrame: 1650,
    endFrame: 1790,
    text: "আজই যুক্ত হোন NexDetail এর সাথে। বিস্তারিত জানতে এবং software demo পেতে",
    highlightWords: ["NexDetail", "software demo"],
  },
  {
    id: 14,
    startFrame: 1790,
    endFrame: 1916,
    text: "এখনই inbox করুন। NexDetail, design smarter, detail faster।",
    highlightWords: ["inbox করুন", "design smarter, detail faster"],
  },
];
