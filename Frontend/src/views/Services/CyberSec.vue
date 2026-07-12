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
            <template v-slot:Name>  </template>
            <template v-slot:Items>

            </template>
        </ServiceCategory>

        <ServiceCard>
            <template v-slot:Name>  </template>
            <template v-slot:Price>  </template>
            <template v-slot:List>
                <div class="grid grid-cols-1 gap-1">
                    <li>  </li>
                    <li>  </li>
                    <li>  </li>
                    <li>  </li>
                    <li>  </li>
                </div>
            </template>
            <template v-slot:Why>  </template>
        </ServiceCard>
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
    </div>
</template>

<script setup lang="ts">
    import ServiceCard from '@/components/Cards/ServiceCard.vue';
    import ServiceCategory from '@/components/Sections/ServiceCategory.vue';
</script>