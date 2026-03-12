---
layout: page
sidebar: false
outline: false
---

<script setup>
import {  VPTeamPage, VPTeamPageTitle, VPTeamMembers, VPTeamPageSection } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/149990805?v=4',
    name: 'MassroiLeon',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/MassroiLeon' }
    ],
    sponsor: 'https://ganknow.com/massroileon/tip',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/61457128?v=4',
    name: 'Team Aurora',
    title: 'Owner',
    links: [
      { icon: 'github', link: 'https://github.com/ZephyrAurora' },
      { icon: 'youtube', link: 'https://youtube.com/@moddedarcaea?si=UYubpf4G1efeOLNV' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/84841152?v=4',
    name: 'Veha',
    title: 'Vitepress',
    links: [
      { icon: 'github', link: 'https://github.com/Veha0001' },
      { icon: 'kofi', link: 'https://ko-fi.com/Veha0001' },
    ]
  },
]
const mention = [
  {
    avatar: 'https://yt3.googleusercontent.com/LQonFOthYiWyFpDR-qdSekhPd7y4q1fOcAH1MYTW2bagvBr3m-Vqjb5rbBAMobyG0cuHB3NCvg=s160-c-k-c0x00ffffff-no-rj',
    name: 'Ellie',
    title: 'Tester',
    links: [
      { icon: 'youtube', link: 'https://youtube.com/@a._Ellie?si=1zMBLAECfKKuoMXe' }
    ]
  },

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Team Aurora</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="members" />
  <VPTeamPageSection>
    <template #title>Worth Mentioning</template>
    <template #members>
      <VPTeamMembers size="small" :members="mention" />
    </template>
    <template #lead>Thanks to all Supporters!</template>
  </VPTeamPageSection>
</VPTeamPage>
