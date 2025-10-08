Feature: Employee Management
Background:
    Given I am logged into BrightHR

 Scenario: Add two employees and verify both
  When I add an first employee with name "Alice Johnson" along with email and date
  And I add an second employee with name "Bob Smith" along with email and date
  Then I should see "Alice Johnson" and "Bob Smith" in the employee list

@firefox
 Scenario: Add employees from JSON file
 When I add the employee details from JSON file along with email and date
  Then I should see LewiThomas and StephThomas in the employee list in the page  


