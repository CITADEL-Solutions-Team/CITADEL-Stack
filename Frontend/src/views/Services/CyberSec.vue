<template>
    <div class="px-16 py-8 flex flex-col gap-16">
        <ServiceCategory>
            <template v-slot:Name> Policy & Documentation </template>
            <template v-slot:Items>
                
                <ServiceCard>
                    <template v-slot:Name> Policy Development </template>
                    <template v-slot:Price> $1500-$2500 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Acceptable Use Policy (AUP) tailored to your business      </li>
                            <li> Password and access control policies                       </li>
                            <li> Incident Response (IR) plans with defined escalation steps </li>
                            <li> Onboarding and offboarding security checklists             </li>
                            <li> Delivered as editable documents your team can maintain     </li>
                        </div>
                    </template>
                    <template v-slot:Why>
                        Without documented policies, there's no standard to hold anyone to when something goes wrong.
                    </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Policy Annual Review Retainer </template>
                    <template v-slot:Price> $149/mo or $1499/yr </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Annual review of all policies for accuracy and relevance </li>
                            <li> Minor updates and revisions included  </li>
                            <li> Keeps your documentation compliant with evolving standards </li>
                        </div>
                    </template>
                    <template v-slot:Why>
                        The threat landscape changes every year, and outdated policies create gaps that auditors and attackers both love to find. 
                    </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Cyber Insurance Questionnaire Support </template>
                    <template v-slot:Price> $350-$550 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Line-by-line guidance through your insurer's application          </li>
                            <li> Ensures accurate, defensible answers that reflect actual controls </li>
                            <li> Reduces risk of claim denial due to misrepresentation             </li>
                            <li> Available for new applications and annual renewals                </li>
                        </div>
                    </template>
                    <template v-slot:Why> 
                        Insurers look for reasons to deny claims, and one misrepresented answer gives them exactly that. 
                    </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Vendor Security Questionnaire Support </template>
                    <template v-slot:Price> $250-$400 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Help responding to security questionnaires from your clients </li>
                            <li> Help sending and reviewing questionnaires to your vendors </li>
                            <li> Consistent, professional responses that reflect well on your business </li>
                        </div>
                    </template>
                    <template v-slot:Why>
                        How you respond to these tells clients and partners everything about how seriously you take security.
                    </template>
                </ServiceCard>

            </template>
        </ServiceCategory>

        <ServiceCategory>
            <template v-slot:Name> Endpoint & Device </template>
            <template v-slot:Items>
                
                <ServiceCard>
                    <template v-slot:Name> Endpoint Hardening </template>
                    <template v-slot:Price> $75-110/device — $25/re-assess </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Enable full-disk encryption on all workstations and laptops  </li>
                            <li> Remove unnecessary bloatware and disable risky services  </li>
                            <li> Configure and verify antivirus / EDR software  </li>
                            <li> Enable host-based firewall and automate OS updates  </li>
                            <li> Restrict local admin access to prevent unauthorized installs  </li>
                            <li> Documented baseline config provided for each device </li>
                        </div>
                    </template>
                    <template v-slot:Why> Most successful attacks don't require sophistication, they just need basic protections that were never properly configured. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> MFA & Password Manager Deployment </template>
                    <template v-slot:Price> $350 +$11/user/mo </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> MFA setup across Microsoft 365 and/or Google Workspace </li>
                            <li> Password manager deployed and configured for your team  </li>
                            <li> Admin and user account separation enforced  </li>
                            <li> Recovery policy documented in case of lockout  </li>
                            <li> User walkthrough and quick-reference guide included </li>
                        </div>
                    </template>
                    <template v-slot:Why> Stolen or reused passwords are behind the majority of breaches, and this is the fastest way to stop them </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Asset Inventory & Lifecycle Tracking </template>
                    <template v-slot:Price> $400 +$99/mo </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Full inventory of hardware and software across your organization </li>
                            <li> Track warranty status, OS versions, and end-of-life dates  </li>
                            <li> Ongoing monthly maintenance to keep records current </li>
                            <li> Flags devices approaching end of support for proactive planning </li>
                        </div>
                    </template>
                    <template v-slot:Why> Untracked devices running outdated software are invisible risks sitting inside your own network.  </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Secure Device Disposal </template>
                    <template v-slot:Price> $50-$90/device </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Certified wipe of all storage media before disposal  </li>
                            <li> Physical destruction available for drives that can't be wiped  </li>
                            <li> Certificate of destruction provided for compliance records  </li>
                            <li> Covers laptops, desktops, phones, tablets, and USB drives </li>
                        </div>
                    </template>
                    <template v-slot:Why> A laptop that wasn't properly wiped before disposal can hand a stranger full access to your business data </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Employee Offboarding Security </template>
                    <template v-slot:Price> $200-$350 or $90/mo </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Immediate access revocation across all systems and accounts </li>
                            <li> Device recovery coordination and remote wipe if needed </li>
                            <li> Audit trail documentation for HR and compliance purposes </li>
                            <li> Checklist-driven process to ensure nothing is missed </li>
                            <li> Available as a per-event fee or low-cost monthly retainer </li>
                        </div>
                    </template>
                    <template v-slot:Why> Every day a former employee keeps access to your systems is a day your business is unnecessarily exposed.  </template>
                </ServiceCard>

            </template>
        </ServiceCategory>

        <ServiceCategory>
            <template v-slot:Name> Training & Awareness </template>
            <template v-slot:Items>

                <ServiceCard>
                    <template v-slot:Name> Security Awareness Training </template>
                    <template v-slot:Price> $10/user </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Bi-monthly live presentations covering current threats         </li>
                            <li> Phishing simulations with real-time click tracking and reports </li>
                            <li> On-demand video library for staff self-paced learning          </li>
                            <li> Monthly engagement summary sent to management                  </li>
                            <li> Content updated quarterly to reflect new attack trends         </li>
                        </div>
                    </template>
                    <template v-slot:Why>
                        Your employees are the biggest attack surface you have, and most breaches start with a single click.
                    </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> New Employee Security Orientation </template>
                    <template v-slot:Price> $300-$400/session </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> One-time onboarding session for new hires </li>
                            <li> Covers password hygiene, phishing awareness, and device policies </li>
                            <li> Reuses existing training content — no prep overhead </li>
                            <li> Certificate of completion provided for HR records </li>
                        </div>
                    </template>
                    <template v-slot:Why> New hires don't know your security expectations yet, and attackers will find them before you get the chance to train them. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Table Top Facilitation </template>
                    <template v-slot:Price> $800-$1200/session </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Script-guided breach scenario run with your team (~3 hrs) </li>
                            <li> Simulates real incidents: ransomware, data leak, insider threat </li>
                            <li> Identifies gaps in communication and decision-making </li>
                            <li> Written debrief with key findings and recommended fixes </li>
                        </div>
                    </template>
                    <template v-slot:Why> The worst time to figure out your incident response plan is while an actual breach is happening.</template>
                </ServiceCard>

            </template>
        </ServiceCategory>

        <ServiceCategory>
            <template v-slot:Name> Monitoring & Quick Wins </template>
            <template v-slot:Items>

                <ServiceCard>
                    <template v-slot:Name> Dark Web Monitoring </template>
                    <template v-slot:Price> $6/user </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Continuous scanning of breach databases for your domain and emails </li>
                            <li> Immediate alert if credentials are found exposed </li>
                            <li> Monthly credential exposure report with remediation steps  </li>
                            <li> Covers employee, executive, and shared account email addresses </li>
                        </div>
                    </template>
                    <template v-slot:Why> Your employees' credentials may already be circulating on breach forums right now without anyone knowing. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Security Health Scorecard </template>
                    <template v-slot:Price> $500 +$99/mo </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Letter-grade scorecard across key security domains </li>
                            <li> Easy-to-understand report suitable for non-technical leadership </li>
                            <li> Identifies your highest-priority gaps with recommended fixes </li>
                            <li> Re-scored quarterly to track improvement over time </li>
                        </div>
                    </template>
                    <template v-slot:Why> Most small businesses don't know where their biggest risks actually are, and this tells you exactly that. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Remote Work Security Kit </template>
                    <template v-slot:Price> $400-$600 +$8/user </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> VPN setup for secure remote access to company resources </li>
                            <li> MFA enforcement across all remote-accessed accounts </li>
                            <li> Remote work acceptable use policy document included </li>
                            <li> Endpoint security check for all remote devices </li>
                            <li> Minimum 5 users; scales with team size </li>
                        </div>
                    </template>
                    <template v-slot:Why> Remote work expands your attack surface overnight, and most home setups have none of the protections your office does. </template>
                </ServiceCard>

            </template>
        </ServiceCategory>
    </div>
</template>

<script setup lang="ts">
    import ServiceCard from '@/components/Cards/ServiceCard.vue';
    import ServiceCategory from '@/components/Sections/ServiceCategory.vue';
</script>