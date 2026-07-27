<template>
    <div class="px-16 py-8">

        <ServiceCategory>
            <template v-slot:Name> Network & Device Setup </template>
            <template v-slot:Items>

                <ServiceCard>
                    <template v-slot:Name> Data Backup & Recovery Setup </template>
                    <template v-slot:Price> $135 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Cloud backup configuration </li>
                            <li> Local backup setup </li>
                            <li> Automated backup scheduling </li>
                            <li> Test restore to confirm backups work </li>
                            <li> Ransomware-resistant backup strategy </li>
                        </div>
                    </template>
                    <template v-slot:Why> Ransomware, hardware failure, and accidental deletion all have one fix — a backup you actually tested. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Software & Firmware Update Management </template>
                    <template v-slot:Price> $89 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Router, camera, and smart device firmware audit                   </li>
                            <li> Operating system and app update scheduling                        </li>
                            <li> End-of-life device identification and replacement recommendations </li>
                            <li> Automatic update configuration where available                    </li>
                        </div>
                    </template>
                    <template v-slot:Why> Outdated software is the single most common way attackers get in, because the fix already existed, it just wasn't installed. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Digital Security Checkup & Maintenance Plan </template>
                    <template v-slot:Price> $25/mo </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Scheduled recurring check-ins (monthly/quarterly)   </li>
                            <li> Review of installed updates and patch status        </li>
                            <li> Password manager and MFA health check               </li>
                            <li> Simple checklist report with recommended next steps </li>
                        </div>
                    </template>
                    <template v-slot:Why> Security isn't a one-time setup, it's upkeep, and small gaps left unchecked eventually become big problems. </template>
                </ServiceCard>

            </template>
        </ServiceCategory>

        <ServiceCategory>
            <template v-slot:Name> Security Hardening & Protection </template>
            <template v-slot:Items>

                <ServiceCard>
                    <template v-slot:Name> Home Network Security Assessment </template>
                    <template v-slot:Price> $175 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Wi-Fi and router vulnerability scan                                  </li>
                            <li> Identification of open ports, weak encryption, and outdated firmware </li>
                            <li> Review of connected devices for unauthorized access                  </li>
                            <li> Network segmentation recommendations                                 </li>
                            <li> Written summary report with prioritized fixes                        </li>
                        </div>
                    </template>
                    <template v-slot:Why> You can't fix what you don't know is broken, and most homeowners have no idea what's actually exposed on their network. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Password & Identity Management </template>
                    <template v-slot:Price> $115 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> anti-malware installation and configuration    </li>
                            <li> OS and app security settings review            </li>
                            <li> Disk encryption setup                          </li>
                            <li> Screen lock and biometric authentication setup </li>
                        </div>
                    </template>
                    <template v-slot:Why> An unprotected device is an open invitation, and basic hardening stops the vast majority of everyday threats before they start. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Password & Identity Management </template>
                    <template v-slot:Price> $115 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Password manager setup and migration from browsers/notes                   </li>
                            <li> Multi-factor authentication (MFA) setup across key accounts                </li>
                            <li> Breach exposure check (email/password leak monitoring)                     </li>
                            <li> Unique password generation for critical accounts                           </li>
                            <li> Guidance on account recovery settings (backup codes, recovery email/phone) </li>
                        </div>
                    </template>
                    <template v-slot:Why> Weak or reused passwords are behind most account takeovers, and a password manager closes that gap in one sitting. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Email & Phishing Protection </template>
                    <template v-slot:Price> $95 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                           <li> Spam/phishing filter configuration                                       </li> 
                           <li> Email account security review (forwarding rules, third-party app access) </li> 
                           <li> Suspicious link/attachment scanning setup                                </li> 
                           <li> Business email compromise (BEC) awareness for home-based workers         </li> 

                        </div>
                    </template>
                    <template v-slot:Why> Your inbox is the front door scammers knock on first, and one convincing email is all it takes to compromise an account. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Dark Web Monitoring & Scanning </template>
                    <template v-slot:Price> $59 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Email address and account exposure scan using licensed breach-monitoring tools        </li>
                            <li> Report on compromised passwords, usernames, and personal data found in known breaches </li>
                            <li> Prioritized action list for exposed accounts                                          </li>
                            <li> Optional ongoing monitoring with alerts for new exposures                             </li>
                            <li> Guidance on securing affected accounts                                                </li>

                        </div>
                    </template>
                    <template v-slot:Why> Your credentials could already be circulating on breach forums, and you won't know until they're used against you. </template>
                </ServiceCard>

            </template>
        </ServiceCategory>

        <ServiceCategory>
            <template v-slot:Name> Data & Maintenance </template>
            <template v-slot:Items>

                <ServiceCard>
                    <template v-slot:Name> Data Backup & Recovery Setup </template>
                    <template v-slot:Price> $135 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Cloud backup configuration           </li>
                            <li> Local backup setup                   </li>
                            <li> Automated backup scheduling          </li>
                            <li> Test restore to confirm backups work </li>
                            <li> Ransomware-resistant backup strategy </li>

                        </div>
                    </template>
                    <template v-slot:Why> Ransomware, hardware failure, and accidental deletion all have one fix — a backup you actually tested. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Software & Firmware Update Management </template>
                    <template v-slot:Price> $89 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Router, camera, and smart device firmware audit                   </li>
                            <li> Operating system and app update scheduling                        </li>
                            <li> End-of-life device identification and replacement recommendations </li>
                            <li> Automatic update configuration where available                    </li>

                        </div>
                    </template>
                    <template v-slot:Why> Outdated software is the single most common way attackers get in, because the fix already existed, it just wasn't installed. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Digital Security Checkup & Maintenance Plan </template>
                    <template v-slot:Price> $25/mo </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Scheduled recurring check-ins (monthly/quarterly)   </li>
                            <li> Review of installed updates and patch status        </li>
                            <li> Password manager and MFA health check               </li>
                            <li> Simple checklist report with recommended next steps </li>
                        </div>
                    </template>
                    <template v-slot:Why>  </template>
                </ServiceCard>

            </template>
        </ServiceCategory>

        <ServiceCategory>
            <template v-slot:Name> Education & Family Safety </template>
            <template v-slot:Items>

                <ServiceCard>
                    <template v-slot:Name> Parental & Family Digital Safety </template>
                    <template v-slot:Price> $109 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Age-appropriate content filtering setup             </li>
                            <li> Screen time and app usage controls                  </li>
                            <li> Social media privacy settings review for kids/teens </li>
                            <li> Location sharing and device tracking setup          </li>
                            <li> Family conversation guide on online safety basics   </li>
                        </div>
                    </template>
                    <template v-slot:Why> Kids are online earlier and more often than ever, and the right guardrails now prevent a lot of hard conversations later. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Security Awareness & Education Sessions </template>
                    <template v-slot:Price> $99 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> One-on-one or family workshops on recognizing scams/phishing </li>
                            <li> Safe browsing habits training                                </li>
                            <li> How to spot fake tech support calls or emails                </li>
                            <li> Guidance on where to report fraud (informational only)       </li>
                            <li> Custom "household security basics" handout                   </li>
                        </div>
                    </template>
                    <template v-slot:Why> The best security software can't stop a scam that a family member is tricked into trusting. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Cybersecurity Consultation & Training </template>
                    <template v-slot:Price> $135 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> One-on-one home cybersecurity walkthrough                            </li>
                            <li> Personalized risk assessment based on household devices/usage        </li>
                            <li> Recommendations tailored to remote workers or online business owners </li>
                            <li> Ongoing quarterly check-in packages                                  </li>
                        </div>
                    </template>
                    <template v-slot:Why> Every household's risk looks different, and a plan built around how you actually use your devices works better than a generic checklist. </template>
                </ServiceCard>

            </template>
        </ServiceCategory>

    </div>
</template>

<script setup lang="ts">
import ServiceCard from '@/components/Cards/ServiceCard.vue';
import ServiceCategory from '@/components/Sections/ServiceCategory.vue';
</script>