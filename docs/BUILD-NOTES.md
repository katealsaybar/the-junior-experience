# The Junior Experience, build notes

## Photography, 25 Aug 2026: the rail was the voucher campaign's photography

Kate spotted it on the live page. **The three photographs in the `#hour` rail were the same
three files the Wellness Voucher pack ships**, byte for byte: `exp-authentic.jpg`,
`exp-colour.jpg` and `exp-people.jpg` all sit in `wellness-voucher-approval-pack/assets/`.
Two campaigns to the same client list, running six weeks apart, on the same pictures.

**Replaced from Tara's and Marish's libraries.** Sampled 15 frames from
*TARA FOUND IMAGES > CONSULTATIONS:INTERACTION* and *JUNIOR STYLIST* (tara@), and 21 from
*stylists working images* (marish@). Marish's folder is the better match: it is the shoot
where stylists are working rather than posing. Every candidate was checked against a contact
sheet of all sixteen voucher-pack images first, so nothing here repeats.

| Slot | New file | Source | Why |
|---|---|---|---|
| She listens first | `consult-listens.jpg` | `BRIT9396` (marish@) | Two women seated, mid-conversation, the hair plan on her lap. The appointment before anything is touched |
| Then she looks properly | `consult-looks.jpg` | `BRIT0317` (marish@) | Hands in dry, ungowned hair, client watching. This is the examination shot the framework's hero brief asks for, and the rail is where it belongs |
| Then she explains it | `consult-explains.jpg` | `BRIT6035` (marish@) | The stylist talking, with the *We see you beyond the hair* card in frame. In-frame copy, and it happens to agree with the page footer |

**The crops were composed for the mobile band, not the desktop card.** `.hour-rail img` is
`aspect-ratio:3/4` above 559px and **`16/10` below it**, with `object-fit:cover`, so a phone
shows only the middle 42% of the height of each 546x820 file. The first pass was cropped for
desktop and beheaded two of the three on mobile. Final geometry, all from full-resolution
originals at 3x the needed size: listens full height at cx 0.52, looks 90% height from the
top at cx 0.58, explains 78% height at cx 0.68. Checked at both ratios before shipping.

**Four files deleted from this repo:** the three above plus `exp-floor.jpg`, unused since the
hero changed. They stay in the page tree, where the Bahrain founding page and the beauty
voucher page still use them. **This supersedes the Photography section further down**, which
asked for `1.png`, `BRIT6639.jpg` and `10.png`; those were named before either library had
been looked at properly, and `BRIT9396`/`0317`/`6035` are the better three.

**Still open:** the hero and the founder portrait are untouched, and the OG image at
`/og/junior-experience.jpg` still does not exist, so every share renders blank.

---

## Sixth pass, 25 Aug 2026: the reprice is applied, and the rhythm has a section

Kate's go-ahead, on the edited playbook being the basis from here.

**1 · The Tone Reset is AED 175, not 130.** Two edits, as scoped: the card in `#start` and
the `minPrice` on the Tone Reset offer in the JSON-LD. Nothing else on the page carried the
number. **The seven prices are now 300 · 175 / 150 / 240 · 380 / 570 / 620.**

**This creates one hard deadline rather than a task.** 130 still stands in nine places in
Emma's own playbook: the offerings line, the blonde rhythm table, the Blonde Story body,
four WhatsApp scripts, a social caption and the Toner Google ad. It also has to be the
number on the Phorest service type. **All of it has to agree before the WhatsApp templates
enter the Meta queue**, because that is the point after which the name and the price cannot
change. Lane 2 ads go out this week, so the ad copy is the urgent one.

**2 · Emma's master line now appears on the page.** New `#rhythm` section between
`#availability` and `#start`, headed *"Great hair isn't one visit. It's a rhythm."*, which is
the idea her whole campaign sits under and which this page did not contain at all. It also
gives the **Blonde Story** somewhere to land: her hook, her week-four warmth, her
*"week eight can look like week one"*, written to the page's voice rather than pasted.

- **It carries no price**, deliberately. It sits above `#start`, where the rule is that any
  number above that point is a defect. Verified: the only price token above `#start` is the
  hero's AED 300, exactly as before.
- Placed at `stone-soft` so the cream/paper alternation still holds either side of it.
- Verified at 1280 and 375: no overflow inside the section, no page scroll, JSON-LD still
  parses, no console errors.
- **It is new client-facing copy**, so it goes through the `trs-brand-guardian` gate with
  the rest of the page. The master line itself is Emma's, verbatim.

---

## What "it runs to the end of the year" changes, 25 Aug

New from Kate, and **it is not written down anywhere yet**: neither the playbook nor the
framework carries a close date. Notion's own default (item 9, L2) is *"there is no close
date, so no urgency language ships at all"*, overridable any time. **A launch on 21 Sep and
a close on 31 Dec is a fourteen-week run**, and four things follow that nobody has ruled on.

**1 · The load-bearing sentence on this page assumes the price is permanent.** In `#start`:
*"Not an introductory rate: it's what an appointment with her costs, for as long as you book
her."* That is the locked Belief 5 line, and it is the one that kills the *"will it go up?"*
objection the framework calls the quiet killer of the in-chair rebook. **If these are
campaign prices that revert on 1 January, that sentence is false and has to come out**, and
the page loses its answer to the biggest objection on it. If they are simply the junior
price list, the sentence stands and "the campaign ends" only means the marketing stops.
**Emma. One line, and it decides whether a locked sentence survives.**

**2 · Same problem, smaller, in `#availability`:** *"this is not a window we reopen on a
schedule."* True of hours that vanish as the books fill. Not true of a campaign that closes
in December and re-runs in 2027.

**3 · Prepaid money crosses the close date, and nothing says what happens to it.** The x3
and x5 bundles, the treatment courses, the four-week membership and the 10-pack are all
prepaid, and the page sells the bundle as *"prepaid"* in as many words. Sessions bought in
November are redeemed in January. **Emma has already asked for a validity on the 10-pack; the
same question applies to all of them.** Without a written rule, unredeemed sessions become a
front-desk argument in January, and Notion item 15 (L2) already treats prepaid course cash as
deferred revenue tracked weekly. **No validity has been invented here.**

**4 · Two calendar consequences.** The voucher-collision work covered 15 to 30 September
only; a run to year end means the whole Q4 calendar needs the same check, on the same four
branch numbers, and Emma owns both. And **what happens to the page itself on 31 December**
belongs in the LID hand-off: it stays live, or it comes down with a redirect target. LID
mounts the page and holds the 301s, so if the hand-off is silent, January leaves a live
campaign page nobody owns.

**Nothing about the close date has been written into the page.** Urgency copy is now
unlocked and is not honest four months out; it is a December action, and it should be a
decision rather than a drift.

---

## Emma's edited playbook, 25 Aug 2026: three changes, one of them a price on this page

`JUNIOR EMMA AUG 26 - edited.docx` replaces the version the fifth pass was read against.
Diffed in full: **three substantive edits, all in Section 02, all written as questions to
us rather than decisions.** Everything else is identical apart from one table in Section 08
reflowing its keyword cells onto single lines.

**1 · The blow-dry package grid, new, and it settles our AED 240.**

| Package | Short / Fine | Medium | Long / Thick | Extra Long |
|---|---|---|---|---|
| The Blowdry Edit x3 | 240 | 288 | 336 | 432 |
| The Blowdry Series x5 | 375 | 450 | 525 | 675 |

**So *Three from AED 240* on the page is correct** and the fifth pass's fault 4 is closed:
240 is the Short/Fine band, not a mis-typed 360. **What it exposes instead** is that the
grid implies a single junior blow-dry of AED 100 at Short (240 ÷ 3 ÷ 0.8), while her own
body line and her Google ad both say *single blowdry from AED 150*. One of those two is
wrong, and only the single price is advertised anywhere. **The page carries neither**, so
nothing here blocks it.

**Her labels carry percentages.** `x3 (20% off)` and `x5 (25% off)` are fine as internal
names and auto-fail as client copy. The page's *Three from AED 240* stays as it is.

**2 · The membership is capped and the 10-pack is questioned.** "Unlimited 4-week" becomes
**two blow-dries a week across four weeks, from AED 799**, which retires an open-ended
promise nobody could staff. The 10-blow-dry package at AED 850 she wants **removed, or
given a validity**. Neither is on the page, so this changes nothing here yet, but if either
ever reaches the page the word *unlimited* cannot come with it.

**3 · The Tone Reset reprice, and this one touches the page.** She reads the published
130 / 180 / 230 / 330 as more than 50% off and proposes a 30%-off computation instead:
**Short 175 · Medium 225 · Long 275 · Extra Long 380.**

- **On the page it is two edits:** the Tone Reset card, *From AED 130*, and the `minPrice`
  on the Tone Reset offer in the schema. Nothing else on the page repeats the number.
- **In her own document it is nine.** 130 still stands in the offerings line, the blonde
  rhythm table, the Blonde Story body, four WhatsApp scripts, a social caption and the
  Toner Google ad. **Repricing is not a one-cell change**, and the ads are Lane 2, going
  out this week.
- **The framework agrees with her instinct.** Layer 2's own table rates "From AED 130" at
  1.2x and marks it *Fails, deep red*. At 175 it clears into a defensible band. This is the
  one edit that improves the commercial model rather than only the optics.
- **Not applied.** It is phrased as a question, and it moves a published price. **One word
  from Emma and it is two lines here plus a pass over her own nine.**

---

## Fifth pass, 25 Aug 2026: checked against Emma's playbook, four faults fixed

Kate asked for the page to be read against two sources at once: the Notion framework and
**Emma's own campaign playbook**, `JUNIOR EMMA AUG 26.docx`, which is the document the
social, WhatsApp and paid lanes are actually being run from. Ten mismatches came out of it.
**Four were fixable without anybody's sign-off and are done, in both copies.**

1. **The retired campaign name was still in client-facing copy.** Both WhatsApp prefills
   said *"I read about A Proper Look"*. The name was overruled on 24 Aug and these two
   strings were missed. Now *"I read about The Junior Experience"*.
2. **The branch tag never fired from her own form.** `branch` was read from the URL only,
   which is right for the four GBP profiles and wrong for everything else: a click from
   Instagram, a caption link or a stylist's own bio arrived with no branch at all, and
   Emma's spec wants a branch tag on every lead at creation. Her salon choice now fills it
   in Emma's vocabulary (`abudhabi` / `dubai-alquoz` / `dubai-motorcity`). **A `?branch=`
   on the URL still wins**, so GBP attribution is untouched. *"Either Dubai salon is fine"*
   has no tag in her list, so it is left blank rather than guessed; the `salon` field still
   carries what she said.
3. **`offering:treatment-course` could never fire.** Treatment courses are one of the six
   required offering tags, a whole offering group in her playbook, and one of her ten KPIs
   (Treatment Course Conversion, 20%). The reason select had no course option, so a course
   lead was untaggable and the KPI had no source. Added as *"A course of treatments, three
   or five"*, mapped to `treatment-course`. **No course price was added to the menu**, on
   purpose: see the blow-dry arithmetic below, which is the same unresolved problem.
4. **The page sold colour at four salons.** The sign-off default in force (close-out item
   84) is that each stylist is bookable only for the families on her own card, which puts
   full colour at Khalifa City only, and Motor City's pair at root colour rather than full.
   The menu offered The Root Revival and The Colour Immersion with no branch limit and the
   salon select allowed any pairing, so Saadiyat plus Colour Immersion was bookable. One
   honest line now sits above the price-band note. **It goes away the day the sign-off
   table exists**, which is half an hour of Ruth's time.

Verified in a browser: course at Saadiyat gives `offering:treatment-course` +
`branch:abudhabi`, smoothing at Motor City gives `smooth-edit` + `dubai-motorcity`, a GBP
link keeps its own branch, "not sure" clears every derived field, both prefills carry the
new name, no console errors, no horizontal scroll.

### The six that were not ours to fix

Left for Emma and Tara, and the first two are the expensive ones.

| # | What | Whose call |
|---|---|---|
| 1 | **Two entry prices are live at once.** Emma's playbook has no charged diagnostic hour and no AED 300 anywhere; her entry points are the Tone Reset from 130 and Treatment plus Blow-dry from 150. The page still leads on the hour in the hero and as the featured card | Emma. One command either way |
| 2 | **The master line is missing.** *"Great hair isn't one visit. It's a rhythm."* is the idea her whole campaign sits under and it is going out on Lane 1 social now. The word *rhythm* appears nowhere on this page, so the ads and the page read as two campaigns | Emma, then a copy pass |
| 3 | **The Blonde Story has nowhere to land.** She runs a dedicated Meta blonde audience with its own hook pointing at the Tone Reset. This page has no mention of blonde, brassiness or the week-four toner. The card is here; the story that sells it is not | Emma, then a new section |
| 4 | **The blow-dry arithmetic does not reconcile. ANSWERED 25 Aug** by the package grid in her edited playbook, above: AED 240 is the Short/Fine band for the x3 and the page is right. What is left is her *single blowdry from AED 150* against a grid that implies 100 at Short, and the course prices, which are still unpublished | Her single-blow-dry band, and a course grid |
| 5 | **The senior-column framing breaks her rule.** Her SAY THIS / NOT THIS table says we never put senior stylists down. The hero premise, section 3 and the founder block all say a senior column is booked to the minute and cuts the consultation first. Already on the escalation list from 21 Aug | Tara. Her words or not at all |
| 6 | **Her no-jargon rule** against *"mineral load, scalp, porosity and bond"*, which is not explained in plain English immediately after | Copy pass, with the brand gate |

**One open question created by fix 2, and it is a real one.** If a woman arrives on an Al
Quoz GBP link and then selects Khalifa City, `branch` stays `dubai-alquoz` (attribution)
while `emirate` says `abudhabi` (her answer). The two tags disagree on purpose and the
`salon` field carries the truth, so reception can see it. If Emma would rather her stated
salon won the routing tag, that is one line, and it costs the GBP-profile attribution.

**Still open from earlier passes, unchanged:** the OG image at `/og/junior-experience.jpg`
does not exist, so every share renders blank; the founder block is Tara's first person but
not Tara's words; the claims table nobody has signed off; and the formal
`trs-brand-guardian` gate runs on the preview URL before hand-off. The colour note added in
fix 4 is new client-facing copy and goes through that gate with everything else.

---

## Fourth revision, 24 Aug 2026: the price menu is combined

Kate's call: combine the two menus. It fixes more than it merges. The framework's three
doors were abstractions, and one of them was **not a real product**: "Door 2 at AED 400"
appears in no price list anywhere. The named menu does.

**Seven priced items, two groups.** Between visits: The Tone Reset from 130, Treatment and
Blow-dry from 150, The Blow-dry Bundle of three from 240. The bigger visits: The Root
Revival from 380, The Colour Immersion from 570, The Smooth Edit from 620. The consultation
hour at AED 300 stays as the featured card above both. Schema offers rebuilt to match.

**AED 130 is not an introductory price, and this was worth checking before writing it.**
The July price tables run 130 / 180 / 230 / 330 by length, so it is the Short/Fine price and
"from" is accurate. Had it been introductory it would have contradicted the locked Belief 5
sentence already on this page, *"Not an introductory rate: it's what an appointment with her
costs, for as long as you book her"*, which is the line that kills the "will it go up?"
objection the framework calls the quiet killer of the in-chair rebook.

**Added the band note**, that every price is a starting price which rises with length and
thickness, and that the stylist says which band before booking rather than at the till. That
closes a gap: a From price the front desk has to walk up is the same fault the framework
killed elsewhere.

**New hidden field `offering`**, using Emma's exact GHL tag vocabulary (`toner-reset`,
`treatment-blowdry`, `blowdry`, `colour-package`, `smooth-edit`), so the page feeds her
pipeline with no translation step. `product` stays look-versus-door, which is what Layer 4
measures the conversion on.

**One bug the browser test caught.** `set()` deliberately ignores an empty value, which is
correct for a UTM that arrives once and must not be wiped by a later empty read, and wrong
for a derived field. Picking The Smooth Edit and then changing to "not sure" was sending
`offering:smooth-edit` to GHL for a woman who had just said she did not know. The three
derived fields now assign unconditionally.

Verified at 375 and desktop: no horizontal scroll, nothing overflowing in the menu, tap
targets 52px, FAQ schema still mirrors the page byte for byte, no console errors.

**The repo is now `katealsaybar/the-junior-experience`.**

---

## Third revision, 24 Aug 2026: the name is The Junior Experience

**Emma-Louise's call as GM, and it overrides the framework's rename.** The framework retired
The Junior Experience with four arguments and replaced it with A Proper Look. Emma's own
playbook kept the original name throughout, including the hashtag in four caption templates,
and her Lane 1 posts today. So the name is settled and the framework's argument 4, that
*junior* must never appear in a URL, is overruled with it.

Applied: `/en/ae/junior-experience/`, the title, all social meta, the eyebrow, the footer
heading, the FAQ, the `campaign:junior-experience-2026` tag matching Emma's GHL spec, and the
session ref prefix, now `JE-`. `css/a-proper-look.css` becomes `css/junior-experience.css`,
and in the inlined tree the folder and `_css/page-junior-experience.css` moved with it.

**Two copy calls made rather than asked, both reversible in one line:**

1. **Buttons say "Book an appointment", not "Book The Junior Experience"**, which does not
   read as a thing a person books.
2. **The AED 300 hour lost its name and kept its description.** It was called A Proper Look,
   which was both the campaign and the product. With the campaign renamed, the hour has no
   name, and inventing one is not a build decision. It reads as "An hour that is only about
   your hair" until somebody names it or drops it.

**The open question this leaves, and it is the real one.** Emma's playbook contains no charged
diagnostic hour and no AED 300. Its entry points are a Tone Reset from AED 130 and a Treatment
plus Blowdry from AED 150, sold on rhythm. This page's primary card is a AED 300 hour sold on
diagnosis. **A page named after her campaign should probably sell her offers.** Either the hour
survives as an addition to her menu, or the card comes out and the three doors carry the page.
That is one command either way, and it needs Emma rather than a developer.

---


## Second revision, 24 Aug 2026, afternoon: Motor City is in

Emma supplied the full staff list. Every count in the framework was built on four
stylists at three branches. It is **ten people at four branches, in two grades**:

- **Junior stylists (6):** May and Irlyn at Khalifa City, Eds Asuncion at Saadiyat,
  Areanne at Al Quoz, Clarissa Destacamento and Xyrhy Unisa at Motor City.
- **Blowdry specialists (4):** Helen Lita and Myra Sarmiento at Saadiyat, Hazel Mae and
  Mevil at Khalifa City. Areanne, Clarissa and Xyrhy are dual-graded.

Eds and Edz are the same person. One spelling: Eds.

Applied to the page:

- **Motor City added** to the salon select, the footer, and as a fourth `LocalBusiness`
  node with its own `areaServed`. The Layer 5 spec built this as a one-boolean change and
  that is exactly what it cost.
- **The Motor City holding sentence and the waiting-list checkbox are gone.** They existed
  because the branch could not deliver. It can.
- **"Either Dubai salon is fine" comes back.** Layer 5 C3 retired it when there was one
  Dubai salon. There are two again.
- **Hero support line** is now "All four salons, Abu Dhabi and Dubai" rather than three
  named branches. This also settles Layer 5 item 51: the "four salons" trust claim used to
  sit beside a three-salon selector and read as an error. They agree now.
- **`emirate` derivation** covers al-quoz, motor-city and either-dubai as Dubai.
- The FAQ answer on which salons run it, in the page and in the FAQPage schema.

**Not applied, because it is not the page's call:** Motor City's two are blowdry, keratin
and root colour rather than full colour, so which branches can sell the colour booking
still depends on the sign-off table. The page does not promise every door at every branch,
so nothing here overstates it.

---

## Revision pass, 24 Aug 2026, morning (Kate)

*Three items below are superseded by the Motor City section above: the hero support line,
Motor City being out of the select, and the schema carrying three branches rather than four.*

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
