package com.university.skillexchange.service;

import com.university.skillexchange.dto.AuthResponse;
import com.university.skillexchange.dto.LoginRequest;
import com.university.skillexchange.dto.RegisterRequest;
import com.university.skillexchange.dto.UserDto;
import com.university.skillexchange.model.User;
import com.university.skillexchange.model.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    
    @Autowired
    private UserService userService;
    
    @Autowired
    private JwtService jwtService;
    
    @Autowired
    private AuthenticationManager authenticationManager;
    
    public AuthResponse login(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );
        
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String token = jwtService.generateToken(userDetails);
        UserDto user = userService.getUserByUsername(userDetails.getUsername());
        
        return new AuthResponse(token, user);
    }
    
    public AuthResponse register(RegisterRequest registerRequest) {
        // Check if username or email already exists
        if (userService.existsByUsername(registerRequest.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        
        if (userService.existsByEmail(registerRequest.getEmail())) {
            throw new RuntimeException("Email already exists");
        }
        
        // Create new user
        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(registerRequest.getPassword());
        user.setFirstName(registerRequest.getFirstName() != null ? registerRequest.getFirstName() : "");
        user.setLastName(registerRequest.getLastName() != null ? registerRequest.getLastName() : "");
        user.setRole(registerRequest.getRole() != null ? registerRequest.getRole() : UserRole.STUDENT);
        user.setDepartment(registerRequest.getDepartment());
        user.setStudentId(registerRequest.getStudentId());
        user.setProfessorId(registerRequest.getProfessorId());
        
        UserDto savedUser = userService.createUser(user);
        
        // Generate token
        String token = jwtService.generateToken(user);
        
        return new AuthResponse(token, savedUser);
    }
}
