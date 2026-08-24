# A Proper Look, build notes

## Revision pass, 24 Aug 2026 (Kate)

Rebuilt against **A Proper Look, Campaign Framework** (canonical copy in Kate's workspace,
`88975ef7d53d82deacd4816fb414aaed`), specifically the **Layer 5 resolutions (all seventeen)**,
**Product architecture** and **Belief 5 locked wording** pages, all dated 24 Aug. The folder
moved from `unhurried-hour/` to `a-proper-look/` and the `_css/pages.json` key moved with it.

**Two copies exist, and both were revised on 24 Aug.** This standalone folder
(`a-proper-look-page/`) is the source-separated hand-off package: one HTML file, four
stylesheets, five scripts, nothing inlined. The other is `tara-rose-pages-main/a-proper-look/`,
where `build.py` inlines the CSS. Keep them in sync; edit here first, then port the markup.
In this folder the page stylesheet was renamed `css/unhurried-hour.css` to `css/a-proper-look.css`,
and `js/tracking.js` carries the `APL-` session ref and the new tag derivation.

What changed, by resolution:

- **Name and URL (items 1, 47).** The Unhurried Hour is retired. Canonical is now
  `/en/ae/a-proper-look/`. Title is the findable name, `A Proper Look · Tara Rose Salon`;
  the H1 stays the emotional line, deliberately different (item 49).
- **Hero option 1 (item 46).** H1 "Nobody will be watching the clock." with the spec sub-line
  and the support line `A Proper Look · AED 300 · Khalifa City · Saadiyat · Al Quoz`.
- **Abu Dhabi in, and the anchor (items 42 to 45).** Salon select now carries Khalifa City A,
  Mamsha Al Saadiyat, Al Quoz 1 and "Either Abu Dhabi salon is fine". "Either Dubai salon"
  is retired. Motor City is out of the select entirely, with the C6 sentence under it and a
  waiting-list checkbox (`motor_city_wait`) so "we'll tell you" has a capture behind it.
- **Two products (item 72, Product architecture).** A Proper Look at AED 300 is the featured
  entry card with its own CTA; the three doors follow at From 570 / 400 / 765 (item 79's
  Medium correction noted; From prices are Short). AED 380/150/620 are gone, and nothing
  advertises AED 150 anywhere.
- **Belief 5 (items 5, 27).** Every "fewer years" sentence is out. The 2a page sentence sits
  above the price in `#start`, verbatim except the banned em dash. The FAQ carries the §3
  reception answer verbatim as "Is a junior stylist less experienced?". `#column` and the
  founder block reframed to demand, not years.
- **FAQ (item 55).** "How long will I be there?" is the first entry, with the durations and
  the "not squeezed into the front of it" line. FAQPage schema mirrors all seven byte for byte.
- **Schema (item 50).** Three LocalBusiness nodes, one per delivering branch, each with its
  own `areaServed` and a `makesOffer` naming A Proper Look at AED 300. Motor City omitted.
- **Tags (item 48).** Hidden fields `campaign=a-proper-look`, `product`, `emirate`, `channel`,
  `branch`. Channel and branch read from the URL (GBP links carry `?channel=gbp&branch=`);
  product and emirate derive from her selections. Session ref prefix is now `APL-`.
- **Deploy (item 53).** Ships `noindex,nofollow`. The flip to index is the last action after
  the four gates, never before.
- **Availability** reworded: the "slot that would otherwise hold two appointments" claim is
  gone (untrue of a 60+15 block); the ringfence carries the scarcity honestly, still no number.

**The host question, answered 24 Aug by a live header check:** `tararosesalon.com` answers as
WordPress on LiteSpeed, which is LID's hosting. Neither GitHub Pages nor Vercel serves the
domain, so both of the framework's assumptions were wrong. The canonical URL can only exist as
a page LID mounts on the WordPress site, exactly like the live beauty voucher page, and the
noindex flip and any 301s happen there. Vercel keeps one job: hosting the preview URL that the
brand gate reviews before this folder is handed to LID.

Still open after this pass: the OG image `/og/a-proper-look.jpg` does not exist yet, founder block still needs
Tara's own words, the sign-off table backs the "signed off by a named senior" sentence (Week 1),
and the formal `trs-brand-guardian` gate runs on the preview URL before launch.

---

# The Unhurried Hour, original build notes (21 Aug, superseded where the section above says so)

Not shipped. Source: **Layer 5, The Landing Page Handover**, in the Notion framework
"The Unhurried Hour, Campaign Framework" (Tara's workspace, 3c2846184941818f...), read
21 Aug 2026 together with Layer 1.

This page replaces the earlier `junior/` build, which was made from the 16 July "Junior
Experience" copy before this framework was found. That page and its CSS are deleted, and
its manifest entry removed. Nothing of the old URL survives, which is correct: junior must
never be the campaign label or appear in a URL.

Built at `unhurried-hour/index.html`, registered in `_css/pages.json` as
`page-beauty-voucher.css` + `trs-core.css` + `page-unhurried.css`.

---

## What was built to spec

The seventeen-section spine in Layer 5 A, in order, with the ids the manifest names:
nav, `#hero`, `#credibility`, `#clock`, `#water`, `#column`, `#hour`, `#truth`, `#founder`,
`#awards`, `#reviews`, `#promise`, `#availability`, `#start`, `#book`, `#faq`, footer.

- **Hero**: Option 1, the one Layer 5 B says to ship. No price in the supporting line.
- **The junior answer at section 6**, before the science pays off and eight sections before
  the first price, with "That was never yours to work out alone." verbatim and the boundary
  line about the trade running against you on years on the floor.
- **Price after proof.** Exactly three from-prices, at section 14, after founder, awards,
  reviews and the Confidence Promise. Zero price tokens above that point.
- **Two reviews only**, Marelize and Sannah, verbatim, both naming female stylists.
- **The Confidence Promise band**, verbatim, once. The word "guarantee" appears nowhere.
- **Availability** carries no number and no countdown, because Ops has not supplied a real
  hours-per-week figure and the spec forbids inventing one.
- **Sticky bar** under 768 only, IntersectionObserver not scroll maths, hidden over `#book`
  and the footer, fade only under `prefers-reduced-motion`.
- **Form**: nine fields, real `<label>` on every one, 16px floor inherited from trs-core,
  submit disabled until valid, "Who should we thank?" revealed on "a friend told me".
- **Tracking**: every hidden field in Layer 5 F.1 present and populated, plus a `UH-XXXX`
  session ref appended to every wa.me prefill so a WhatsApp thread matches a session.

Verified in a real browser at 375, 768, 834, 1280 and 1920: no horizontal page scroll at
any width, hero pill above the fold at 375x667 (lands at 602) and at 1280x800 (582), no nav
collision at 1280, doors at 1/2/3 columns, sticky bar present under 768 and absent above,
every input at or above 16px, every tap target at or above 44px, no dead `#` anchor.

---

## Two contradictions in the source. Both need Tara, not a build decision.

**1. AED 150.** Layer 1 says the non-negotiable move is that the campaign stops advertising
AED 130 and AED 150, because at the stated CPL and conversion targets a 5x multiplier needs
a first-visit bill of AED 389 to 556, and AED 150 returns 1.4x, inside the playbook's own
red band. Layer 5 D then puts **From AED 150** on entry card 2 as the advertised price.
Those cannot both hold. The page currently carries Layer 5's figure, because Layer 5 is the
page spec, but this is the single most expensive open item on the page.

**2. The three doors do not match between layers.**

| | Layer 1, the three doors | Layer 5 D, the entry cards |
|---|---|---|
| Colour | AED 570, "gone by week three" | From AED 380 |
| Second door | AED 400, the diagnostic door, database and retargeting only | From AED 150, breakage and snapping |
| Keratin | AED 765, high-intent search only | From AED 620, frizz |

Layer 1 also restricts doors 2 and 3 to database, retargeting and high-intent search, and
names door 1 as the only paid door. Layer 5 gives all three an equal card and an equal
button. The page follows Layer 5. If Layer 1's channel rule stands, cards 2 and 3 need
either a different treatment or a different page.

**3. The limescale analogy. SETTLED, 21 Aug 2026.** Layer 5 section 5 prescribes "the
limescale on your shower screen". Brand review ruled that cannot be carved out: limescale is
named in the ban list and a shower screen is a household analogy, and that ban is what
retired the old hero. So the spec loses this one. `#water` now carries the approved beauty
equivalent instead, once: *"like old make-up that never fully came off"*.

---

## Gates still open, and what each one blocks

| Layer 5 ref | Item | Blocks |
|---|---|---|
| 0.1 | Which host serves tararosesalon.com, Vercel or GitHub Pages. The infrastructure audit says one, the technical-lead skill says the other | All four required 301s. **None are built.** A client-side stub leaks a hop of link equity, so this decides the method, not just the file |
| 0.2 | Can either Abu Dhabi salon actually deliver the hour | The page ships **Dubai only**, Al Quoz and Motor City, in the hero support line, the salon select, the footer and the Service schema. Until this is answered, **Abu Dhabi must come out of Meta geo targeting**, per the spec's own rule: never list a salon to keep an ad set alive |
| 5 | A dated, citable source for the mineral figure | The ppm number. The page says "among the highest mineral levels in the world" with no number, which is the spec's stated fallback |
| 13 | Real unhurried hours per week per salon | The availability section carries the honest shape of the claim but no figure |
| I.1 | The operational definition of "the hour": 60 minutes of consultation, or a 90-minute slot with a protected 20-minute consult | Rostering, and the promise the page is making |
| I.11 | Whether every stylist in the column has genuinely trained in all eight categories, the UAE diagnostics and the consultation method | A verifiable factual claim about staff. It is on the page in section 6 and in the FAQ. If it is true of most but not all, the sentence narrows before launch |
| 8 | The dark pull line is a candidate, and Layer 5 says gate it through trs-brand-guardian before build | One sentence |
| 9 | The founder block is written to the direction in Layer 5, not in Tara's own words | Her sign-off, or her voice note |
| 16 | Layer 5 says the six FAQ replacements are "in H", but H is the SEO section and does not contain them. The six on the page were written from the doctrine and the section briefs | Sign-off. The FAQPage schema mirrors them verbatim, so a wording change is two edits |

---

## Where this build departs from Layer 5, deliberately

- **`/menu/` is not built, and the links to it are removed.** The spec puts a menu link in
  `#start` and in the footer. Both are out until the page exists, on brand review's block:
  see the photography and review sections below. When it is built it inherits every rule on
  this one, no percentage-off, no "Save AED", a course priced as a course. That rewrite
  covers the old headings "Keratin Smoothing 30% Off", "Colour Packages (50% off treatment)",
  "Blowdry Edit x3 (20% off)" and "Treatment Courses 30% Off", and every Save AED cell.
- **`page-manifest.json` is not emitted.** Layer 5 assumes a build system with
  `_content/tokens.json`, `_content/uae.json` and `./build.sh`. This repo is the live page
  tree: `_css/*.css` plus `build.py`, inlining CSS into each page. So prices and the salon
  list are typed into the page rather than driven from `uae.json`, and the
  `price_tokens` sum-to-nine assertion is not enforced by a build step. It holds today,
  checked in the browser: three from-prices, nothing above section 14.
- **Consent wording and the GA4/GHL event spec are incomplete.** Parts of Layer 5 F and G
  could not be read out of Notion, so the consent copy on the form is the house wording from
  the voucher page rather than the exact strings the spec names. Check F and G before launch.
- **The `<TRS.Environment/>` four-card module** does not exist in this repo, so section 5
  uses the standard three-card `grid-3`, dropping the Maintenance card.
- **The photography is interim.** The hero is `hero-mapping.jpg`, a stylist working at the
  mirror station. It replaced `exp-floor.jpg`, which is two women with a laptop at a window
  and reads as a meeting, not a hair appointment. The `#hour` rail uses `exp-authentic`,
  `exp-colour` and `exp-people`. All four are real salon shots already in the repo, and all
  four are placeholders for the right ones. See the photography section below.
- **The OG image at `/og/unhurried-hour.jpg?v=1` does not exist.** Every share renders blank
  until it does. Spec: 1200 x 630, JPEG q80 or WebP, 200KB or under, the hero photograph.
- **The two `/menu/` links are removed from the page**, not just unbuilt. Brand review, 21 Aug,
  blocked them: a visible "every price, every length" link landing on a 404, directly under
  three from-prices, undoes the trust the fourteen sections above it built. They go back the
  day `/en/ae/unhurried-hour/menu/` ships clean.


---

## Photography

The right source is Tara's own curated library, shared to kate@:
**Shared with me > TARA FOUND IMAGES**, sorted into BLONDES, CONSULTATIONS:INTERACTION,
EDUCATION, EXTENSIONS, HOMECARE, JUNIOR STYLIST, SALON IMAGES, TEAM, TREATMENTS.
`CONSULTATIONS:INTERACTION` is the folder this campaign is about.

Wanted, and why:

| File | Folder | Slot |
|---|---|---|
| `1.png` | CONSULTATIONS:INTERACTION | Hero. Stylist holding a section of the client's hair, client's face visible in the mirror. Matches the Layer 5 hero brief almost exactly |
| `BRIT6639.jpg` | JUNIOR STYLIST | Rail, "then she looks properly". Stylist leaning in over the client, product in hand |
| `10.png` | CONSULTATIONS:INTERACTION | Rail, "then she explains it". Stylist mid-explanation, comb in hand |

Two cautions. The `.png` names suggest screen-grabs, so if either lands under about 1400px
wide the hero needs a BRIT original instead. And do not pull from
**Tish tash marketing content, Tara Rose Bahrain**: that is the wrong market for this page.

Those files could not be fetched from this session. The tara@ folders are private to her and
Chrome here is signed in as kate@; the accounts that can read them return text or base64, and
a 6MB JPEG through a tool result is not viable. They need downloading by hand.

---

## Brand review, 21 Aug 2026

`trs-brand-guardian` v3.2. Verdict **FIX FIRST, then ESCALATE TO TARA**. Score 71/100.
All seven blocks cleared the same day, in both copies:

1. "Refine, never refund." deleted. Internal doctrine printed as client copy, and it plants
   the word refund at the moment the band is buying her trust.
2. `#hour` now names the **8-Step Hair Plan**. The numbered One-to-Five labels became
   First / Then / Then / Then / Last, because a numbered five beside a named eight invites
   the retired five-step reading.
3. `#truth` no longer attributes the line to "Tara Rose". A brand is not a speaker. The slot
   now carries the rhythm block 5 eyebrow, which was the only block heading missing. If Tara
   confirms the words are hers, the attribution is "Tara Rose Kidd".
4. Entry card 3: "cuticle" and "fills the porosity" out. Trichology register plus an absolute
   efficacy claim, in the highest-stakes sentence on the page.
5. Entry card 2: "through the cortex" out.
6. `#water`: "pigment" out.
7. Both `/menu/` links removed. See above.

Plus, on the review's ruling: **the limescale analogy stays out.** limescale is named in the
ban list and a shower screen is a household analogy, so the Layer 5 line cannot be carved
out. But zero analogies under-delivers against "one analogy, then stop", so `#water` now
carries the approved beauty equivalent: *"like old make-up that never fully came off"*, once.

Soft fixes also taken: "Not her fault" to "Not your fault" (the page says "you" throughout);
"stops it lifting" to "holds it longer"; "not the same appointment for less money" cut from
the FAQ so `#column` carries it alone; the Confidence Promise stated once, with the FAQ
pointing at the band; every HTML comment stripped, because build commentary ships in
view-source; the schema apostrophe mirrored so the FAQ pair matches byte for byte; one
`HairSalon` node with two addresses split into two nodes with distinct `@id`s; and the
footer's company LinkedIn and YouTube moved out from under Tara's name.

**Still escalated, not fixable by edit:** the AED 150 contradiction, `#founder` being Tara's
first person but not Tara's words, the three doors disagreeing between layers, and the claims
table below.

### Claims on this page nobody has signed off as true

Every row is a factual assertion to a paying stranger, and none is verifiable from this repo.

- "among the highest mineral levels in the world" (no dated citable source)
- every stylist in the column trained in all eight categories, the UAE diagnostics and the
  consultation method. If true of most but not all, the sentence narrows before launch
- an unhurried hour "sits in a slot that would otherwise hold two appointments"
- "It is ringfenced. Nobody can book over it to catch up."
- the six awards in `#awards`
- "Eleven years, four salons"
- the four "As featured in" outlets, and their four live URLs
- five stars on both reviews
- AED 380 / 150 / 620
- that our own senior column is "booked to the minute" and cuts the consultation first.
  This one is published self-criticism of the highest-margin column. Founder-voiced honesty
  is on brand, but it needs her word, not ours.
