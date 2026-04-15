// ============================================================================
// EXAMPLE: HOW TO INTEGRATE INTO YOUR MAIN PAGE
// ============================================================================

// At the top of your page.tsx, add these imports:
import ProcessSteps from "@/components/ProcessSteps";
import WhyProfessionalMatters from "@/components/WhyProfessionalMatters";

// Then, replace the old Installation Process Section in your JSX with:

<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true, margin: "-100px" }}
className="my-5"

> {/_ Process Steps Component _/}
> <ProcessSteps />

{/_ Spacer _/}

  <div className="my-5" />

{/_ Why Professional Matters Component - Dark Premium Section _/}
<WhyProfessionalMatters />
</motion.div>

// ============================================================================
// FEATURES OF EACH COMPONENT
// ============================================================================

/\*\*

- ProcessSteps Component Features:
-
- 1.  LAYOUT: Alternating timeline pattern (left-right-left-right)
- - Desktop: Shows vertical timeline line connecting all steps
- - Mobile: Stacked vertically for responsive experience
-
- 2.  DESIGN ELEMENTS:
- - Premium numbered badges (01, 02, 03, etc.) instead of basic icons
- - Lucide-react icons for visual hierarchy
- - Smooth alternating layout that draws the eye down the page
- - Generous whitespace and rounded corners
-
- 3.  ANIMATIONS:
- - Staggered entrance on scroll (react-intersection-observer)
- - Subtle hover lift (y: -5) on cards
- - Shadow elevation on hover for depth
- - Color transitions on background
-
- 4.  RESPONSIVE:
- - Desktop: Side-by-side timeline with connecting line
- - Tablet: 1 column with modified layout
- - Mobile: Full-width cards, timeline hidden
    \*/

/\*\*

- WhyProfessionalMatters Component Features:
-
- 1.  DESIGN: Premium glassmorphism dark theme
- - Dark navy background (#1a3a52)
- - Frosted glass effect with backdrop filter
- - Light text on dark background for high contrast
- - Premium subtle borders and shadows
-
- 2.  LAYOUT: 3-column card grid (responsive to mobile)
- - Glassmorphic card containers
- - Icon + Title + Description structure
- - Consistent spacing and typography
-
- 3.  INTERACTIONS:
- - Hover lift on cards (y: -8)
- - Icon container scales and rotates on hover
- - Background and border color transitions
- - Smooth staggered entrance animation
-
- 4.  VISUAL POLISH:
- - Premium color palette with light text
- - Large, clear icons (lucide-react)
- - Sophisticated typography with letter-spacing
- - Professional shadow layers
    \*/

// ============================================================================
// REQUIRED DEPENDENCIES
// ============================================================================

/\*\*

- Make sure these are installed in your project:
- - lucide-react (for icons)
- - framer-motion
- - react-intersection-observer
-
- npm install lucide-react framer-motion react-intersection-observer
  \*/

// ============================================================================
// CUSTOMIZATION GUIDE
// ============================================================================

/\*\*

- Change ProcessSteps Icons:
- Import from lucide-react and replace the icon components:
- - CheckCircle → Check, CheckCheck, VerifiedBadge, etc.
- - PencilRuler → Edit, Pencil, LayersPlus, etc.
- - Wrench → Tool, Settings, Zap, etc.
- - Flask → Beaker, TestTube, FlaskConical, etc.
- - CheckDouble → CheckCheck, CheckCheck2, Shield, etc.
-
- Change Colors:
- - Primary Navy: #1a3a52 (change in style prop)
- - Text Dark: #1a1a1a (change in style prop)
- - Text Muted: #6b7280 (change className to text-secondary)
- - Background: #f8fafb (change in style prop)
-
- Change Animation Timing:
- - staggerChildren: 0.15 (increase for slower stagger)
- - delayChildren: 0.1 (increase for delayed start)
- - duration: 0.6 (increase for slower animations)
    \*/
