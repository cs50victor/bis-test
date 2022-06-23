package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
)

type FibData struct {
	Number   int   `json:"fibNum"`
	Sequence []int `json:"sequence"`
}

func Handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	resp := make(map[string]interface{})
	fibNumStr := r.URL.Query().Get("num")

	if len(fibNumStr) == 0 {
		resp["error"] = "No number provided. Please provide a positive number by adding a query to the url. i.e api/fib/?num=10"
	} else {
		fibNum, err := strconv.Atoi(fibNumStr)
		if err != nil {
			resp["error"] = "Invalid data provided. Ensure num is a positive integer. i.e api/fib/?num=10"
		} else if fibNum <= 0 {
			resp["error"] = "Error! num must be a positive integer. i.e api/fib/?num=10"
		} else {
			resp["data"] = FibData{Number: fibNum, Sequence: fibonacci(fibNum)}
			resp["error"] = nil
		}
	}
	if resp["error"] != nil {
		w.WriteHeader(400)
		resp["data"] = nil
	}

	jsonResp, err := json.Marshal(resp)
	if err != nil {
		fmt.Println("An error occurred marshalling JSON.\nErr: %s", err)
	} else {
		w.Write(jsonResp)
	}
}


/*
  1. Fibonacci Sequence
*/ 
func fibonacci(n int) []int {
	sequence := []int{}
	var n1, n2 int = 0, 1
	var n3 int

	for i := 1; i <= n; i++ {
		sequence = append(sequence, n1)
		n3 = n1 + n2
		n1 = n2
		n2 = n3
	}
	return sequence
}
