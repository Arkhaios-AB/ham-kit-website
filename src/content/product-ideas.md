---
layout: layout.njk
title: "Product Ideas | Artisan HAM Kits"
activeNav: "ideas"
navTitle: "Other product Ideas"
navOrder: 4
permalink: "/product-ideas.html"
---

# Product Ideas

These are concepts I'm currently researching and evaluating. If you're interested in any of these projects or have feedback, I'd love to hear from you.

# Hybrid LFP battery power supply

A power supply that combines a low-power switching or linear supply with an LFP (Lithium Iron Phosphate) battery for handling high-power transmission peaks. The key insight: most amateur radio operation involves more listening than transmitting.

During receive periods (low power draw), the supply charges the LFP battery at a modest rate. When transmitting (high power demand), the battery supplements the supply to deliver the required current. This allows for:

- A smaller, cheaper primary power supply
- Battery provides instantaneous high current without voltage drop
- Natural load leveling over the duty cycle
- Low noise operation

## Design Challenges

The viability depends on calculating:
- **Expected duty cycle**: Typical listen/transmit ratio for various operating modes (SSB, CW, digital modes, etc.)
- **Charge rate requirements**: How fast the battery needs to recharge between transmissions
- **Battery capacity**: Minimum capacity to handle transmission bursts without excessive depth of discharge
- **Charge efficiency**: LFP cells are efficient but not 100% - losses need to be factored in
- **Overall running cost**: LFP batteres are not cheap and the charge/discharge efficiency is 95%.

## Example Configuration

For a typical amateur radio setup:
- **Transmit current:** 20.5A
- **Battery capacity:** 50Ah LFP
    - Battery depth of discharge (DoD): 80% -> 40Ah usable
- **Charge current:** 5A
- **Duty cycle:** 50% RX / 50% TX

**Operating time:** 
- ~5 hours of continuous 50/50 duty cycle operation, if charger is enabled -> 40Ah / ((20.5A × 0.5) + (3A × 0.5) - 5A)
- ~3 hours of continuous 50/50 duty cycle operation, if charger is disabled -> 40Ah / ((20.5A × 0.5) + (3A × 0.5))
**Recharge time:** 
- ~8 hours of transceiver off to return to 100% charge at 5A
- ~13 hours of transceiver in RX only to return to 100% charge with 2A of RX consumption

## Costs

| Component | Capacity/Type | Cost (EUR) | Operating Time (50/50 RX/TX) |
|-----------|---------------|------------|------------------------------|
| LFP Cells | 100Ah (4 EVE) | 140 | ~10 hours |
| LFP Cells | 50Ah (4 EVE) | 120 | ~5 hours |
| LFP Cells | 25Ah (4 CALB) | 60 | >2 hours |
| BMS | - | 5-20 | - |
| Case | - | 50-100 | - |
| Electronics | - | 40-70 | - |

**Total estimated cost:**
- **25Ah system:** 155-250 EUR
- **50Ah system:** 215-310 EUR
- **100Ah system:** 235-330 EUR

## Potential Benefits

- Zero noise capability when the charge circuit is disabled
- Reduced power consumption during standby/receive
- Smaller, quieter power supply (no need to size for peak transmit current)
- Battery can provide backup power during brief mains interruptions
- Could be more cost-effective than a full 40A+ power supply (??)

## Open Questions

- Linear or SMPS for the charging supply?
- Battery management and balancing requirements?
- Integration with existing transceivers?

---

# Regenerative DC Electronic Load

Testing power supplies requires dummy loads that convert electrical energy into heat. For high-power testing (20-40A at 13.8V = 275-550W), this becomes wasteful and requires substantial cooling. A typical session could waste several kWh.

A regenerative DC electronic load that converts the DC test current back to AC and feeds it into the mains grid, recovering 95%+ of the energy that would otherwise be wasted as heat.

## Key Features

**Energy Recovery:**
- Active rectification/inversion to feed energy back to grid
- Target efficiency: 95%+ (only 5% becomes heat vs. 100% in resistive loads)
- Significant cost savings over time for frequent testing
- Reduced cooling requirements

**Functionality:**
- Programmable constant current, constant voltage, constant power, and constant resistance modes
- Wide current range: 0-40A (to match power supply testing needs)
- Voltage range: 0-15V (covers 13.8V nominal with margin)
- Current regulation accuracy and stability
- Protection: over-voltage, over-current, over-temperature

**User Interface:**
- Digital display for voltage, current, power readings
- Adjustable setpoints via rotary encoder or digital controls
- Real-time power and energy measurements
- Data logging capabilities

## Use Cases

- Power supply development and testing
- Quality control and burn-in testing
- Battery charger testing
- Educational tool for power electronics
