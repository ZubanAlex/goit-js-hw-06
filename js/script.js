'use strict';

import users from './users.js';

//Task-01
const getUserNames = users => {
  return users.map(user => user.name);
};
console.log(getUserNames(users));

//Task-02
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, 'blue'));

//Task-03
const getUsersWithGender = (users, gender) => {
  const userWhithGender = users.filter(user => user.gender === gender);
  return userWhithGender.map(user => user.name);
};
console.log(getUsersWithGender(users, 'male'));

//Task-04
const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};
console.log(getInactiveUsers(users));

//Task-05
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};
console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

//Task-06
const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max);
};
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

//Task-07
const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};
console.log(calculateTotalBalance(users));

//Task-08
const getUsersWithFriend = (users, friendName) => {
  return users.reduce((usersWhoHaveFriend, user) => {
    if (user.friends.includes(friendName)) {
      usersWhoHaveFriend.push(user.name);
    }
    return usersWhoHaveFriend;
  }, []);
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

//Task-09
const getNamesSortedByFriendsCount = users => {
  const sortUsers = users.sort((a, b) => a.friends.length - b.friends.length);
  return sortUsers.map(user => user.name);
};
console.log(getNamesSortedByFriendsCount(users));

//Task-10
const getSortedUniqueSkills = users => {
  const getAllSkills = users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills;
  }, []);
  const uniqueSkills = getAllSkills.filter(skill => {
    return getAllSkills.hasOwnProperty(skill)
      ? false
      : (getAllSkills[skill] = true);
  });

  return uniqueSkills.sort();
};

console.log(getSortedUniqueSkills(users));
