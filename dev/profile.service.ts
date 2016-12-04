import { Profile } from './profile';
export class ProfileService{
    private profiles:Profile[]=[
        new Profile('Default profile',['Chennai','Hyderabad','Pune'])
    ];
    saveNewProfile(cities:string[]){
        const profileName='Profile '+this.profiles.length;
        const profile=new Profile(profileName,cities);
        this.profiles.push(profile);
    }

    getProfiles(){
        return this.profiles;
    }

    deleteProfile(profile:Profile){
        this.profiles.splice(this.profiles.indexOf(profile),1);
    }
}