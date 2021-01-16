<template>
<b-container>
    <b-row>
        <ProfileCard :profileInfo="person"/>
    </b-row>
</b-container>
</template>

<script>
import ProfileCard from './profileCard/ProfileCard';

export default {
    name: 'Profile',
    data(){
        return {
            person: {name: 'Héctor', weight: 69, idealWeight: 62,  goal: 'Tonificar'}
        }
    },
    components: {
        ProfileCard
    }
};
</script>

<style scoped>
@import './Profile.css'
</style>
