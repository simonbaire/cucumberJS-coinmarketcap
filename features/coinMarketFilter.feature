Feature: Filtering UI and extracting data for comparison
	#This test asserts against the number of rows displayed before and after filtering
	# It assumes the before filtering page rows is equal to 20 and after filtering should equal to 2
	# Extra tests can be added once acceptance criteria of what and should not be displayed is identified
Scenario: User sets filters and compares data
		Given I have gone to the coin market app
		And I select the option to show results by 20 rows
		And I filter by the PoW Algorithm
		And I filter by coins
		And I set a price range
		When I select the option to show the applied filter results
		Then I compare the filtered page content with the page content before filtering

