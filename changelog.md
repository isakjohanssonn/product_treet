# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and takes inspiration from [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
## [Unreleased]

### Added
- Setting gameification mode is now available.

### Changed
- Log out now redirects to log in page. Log in page redirect to intro page.

### Fixed
- Images added in the tree view.

### Removed


## [3.0.0] - 2020-11-26

### Changed
- Preperation in main for new iteration, page- and component names added.
- Navbar has been updated, buttons for log out and go back added to work with different pages. Also CSS updated and smaller footer changes.
- Navbar is now rendered in individual view components, instead of main.
- Streaks updated, designwise, trees and achievements but is missing openEHR.
- Upcoming and latest achievements components updated
- Measurements and remainingMeasurements now works together and newMeasurements & SuccesfullySaved added to connect the data with the user-profile. Saved as a state. 



### Added
- Goals page added with cards for each disease that links to a disease specific page, only diabetes card works for now. 
- Disease specific page for diabetes created but is empty.
- Slide function between forest <-> goals <-> achievements, does not have gameification level support.
- AllAchievements created, a datatype to represent achievements. An array for different types of achievements and has a placeholder to visually represent an achievement on achievementPage.
- Functionality added to the achievementBox, now possible to import achievement card component with 1 or 3 achievements.
- Forest added, represents the trees that have been grown, does not have support for EHR yet.
- Tree component added, now visualized by a tree and grows according to the streak. CurrentTree can be imported as a component to another page.
- remainingMeasurements added, measures how many measurements are left do.



### Fixed
- Two loops added to RecentMeasurements component, adds medical data to array.
- Pipeline has been updated, yarn install instead of npm install.
- Bugs in streaks and achievementBox fixed.
- Small bug fixes and code updated to standard, both .js and .css files.

## [2.0.0] - 2020-11-15
### Added
- A new changelog has now been added to the repository, read the version control document to get details on how it works.


